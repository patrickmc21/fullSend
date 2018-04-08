import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import RideCard from '../../Components/RideCard/RideCard';

import { getAthleteActivities } from '../../api/external-api-calls/getAthleteActivities';
import { getTrails } from '../../api/external-api-calls/getTrails';
import updateUserRides from '../../api/internal-api-calls/updateUserRides';

import rideCleaner from '../../api/helpers/rideCleaner';

import * as actions from '../../Actions';

export class RideContainer extends Component {

  handleClick = async () => {
    const { user, rides } = this.props;
    console.log(user)
    const afterTime = moment().startOf('year');
    const afterEpoch = Date.parse(afterTime);
    const beforeTime = moment().startOf('isoweek');
    const before = Date.parse(beforeTime)/1000;
    const after = rides.length > 0 ? Date.parse(rides[rides.length-1].epoch) : afterEpoch/1000;
    console.log('after ', after);
    console.log('start ', 1519862401);
    console.log('before ', before);
    console.log('end    ', 1522540741);
    // try {
      const userActivities = await getAthleteActivities(user.token, after, before);
      console.log(userActivities);
      // const ridesWithTrails = userRides.map( async (ride) => {
      //   return {...ride, ...getTrails(ride.latLng[0], ride.latLng[1])}
      // });
      // const cleanRides = rideCleaner(ridesWithTrails);
      // this.props.updateRides(cleanRides);
      // cleanRides.forEach(ride => updateUserRides(ride, user.id))
    // } catch (error) {
    //   console.log(error)
    // }
  };

  render() {
    const { rides } = this.props
    const rideCards = rides.map(ride => {
      return <RideCard key={ride.epoch} ride={ride}/>
    })
    return(
      <section>
        <button 
          className='update-rides'
          onClick={this.handleClick}>
            Update Rides
        </button>
        {rides.length > 1 && rideCards}
        {rides.length < 1 && <h6>No Rides to Show!</h6>}
      </section>
    )
  }
};

export const mapStateToProps = state => ({
  user: state.user,
  rides: state.rides
});

export const mapDispatchToProps = dispatch => ({
  updateRides: rides => dispatch(actions.updateRides(rides))
});


export default withRouter(connect(mapStateToProps, null)(RideContainer))