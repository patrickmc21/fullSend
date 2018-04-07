import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import RideCard from '../../Components/RideCard/RideCard';

import getAthleteActivities from '../../api/external-api-calls/getAthleteActivities';
import getTrails from '../../api/external-api-calls/getTrails';

export class RideContainer extends Component {

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
  rides: state.rides
});

export const mapDispatchToProps = dispatch => ({

});


export default withRouter(connect(mapStateToProps, null)(RideContainer))