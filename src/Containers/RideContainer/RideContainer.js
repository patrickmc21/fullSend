import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import RideCard from '../../Components/RideCard/RideCard';
import DateSelector from '../DateSelector/DateSelector';

/* eslint-disable max-len */
import { getAthleteActivities } from '../../api/external-api-calls/getAthleteActivities';
/* eslint-enable max-len */

import { getTrails } from '../../api/external-api-calls/getTrails';
import updateUserRides from '../../api/internal-api-calls/updateUserRides';

import rideCleaner from '../../api/helpers/rideCleaner';

import * as actions from '../../Actions';

import './RideContainer.css';

export class RideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: '',
      currentMonth: ''
    };
  }

  handleClick = async () => {
    const { user, rides } = this.props;
    const { before, after } = this.getRidesTimeSpan(rides);
    try {
      const userActivities = await getAthleteActivities(user.token, after, before);
      const ridesOnly = this.filterActivities(userActivities);
      const ridesWithTrails = await this.getTrails(ridesOnly);
      const cleanRides = rideCleaner(ridesWithTrails);
      this.props.updateRides(cleanRides);
      this.addRidesToLocalServer(cleanRides, user.id);
    } catch (error) {
      this.setState({errorStatus: error.message});
    }
  };

  filterActivities = (activities) => {
    return activities.filter(activity => activity.type === 'Ride');
  }

  getTrails = (rides) => {
    const ridesWithTrails = rides.map( async (ride) => {
      const response = await getTrails(ride.start_latlng[0], ride.start_latlng[1]);
      const trail = response.trails[0];
      return Object.assign({}, ride, trail);
    });
    return Promise.all(ridesWithTrails);
  };

  getRidesTimeSpan = (rides) => {
    const afterTime = moment().startOf('year');
    const afterEpoch = Date.parse(afterTime);
    const beforeTime = moment().startOf('day');
    const before = Date.parse(beforeTime)/1000;
    const after = rides.length > 0 ? rides[0].epoch : afterEpoch/1000;
    return {before, after};
  };

  addRidesToLocalServer = (rides, id) => {
    rides.forEach(ride => updateUserRides(ride, id));
  }

  render() {
    const { rides, month } = this.props;
    const rideCards = rides.map(ride => {
      return <RideCard key={ride.epoch} ride={ride}/>;
    });
    const ridesByRecent = rideCards.sort((first, second) => {
      return second.key - first.key;
    });
    const monthRides = rides.filter(ride => {
      if (month !== 'All') {
        const startTime = moment([2018, 0, 1]).month(month).format('x')/1000;
        const endTime = moment([2018, 0, 31]).month(month).format('x')/1000;
        return ride.epoch >= startTime && ride.epoch < endTime;
      }
    });
    const monthCards = monthRides.map(ride => {
      return <RideCard key={ride.epoch} ride={ride}/>;
    });
    return (
      <section className='ride-container'>
        <DateSelector />
        <button 
          className='update-rides'
          onClick={this.handleClick}>
            Update Rides
        </button>
        <Route exact path='./main/rides' render={() => {
          return (<div className='card-container'>
            {rides.length > 1 && month === 'All' && ridesByRecent}
            {month !== 'All' && monthRides.length > 1 && monthCards}
            {month !== 'All' && monthRides.length < 1 && <h6>No Rides to Show!</h6>}
            {rides.length < 1 && <h6>No Rides to Show!</h6>}
          </div>)
        }}
        />
      </section>
    );
  }
}

RideContainer.propTypes = {
  user: PropTypes.object,
  rides: PropTypes.array,
  updateRides: PropTypes.func
};

export const mapStateToProps = state => ({
  user: state.user,
  rides: state.rides,
  month: state.month
});

export const mapDispatchToProps = dispatch => ({
  updateRides: rides => dispatch(actions.updateRides(rides))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RideContainer));