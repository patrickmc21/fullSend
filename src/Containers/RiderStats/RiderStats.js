import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


import './RiderStats.css';

export const RiderStats = ({stats, user}) => {
  return (
    <section className='rider-stats'>
      <div className='stats-container'>
        <article className='rider-profile'>
          <div className='rider-info'>
            <img
              src={user.img} 
              alt='user profile'
              className='user-profile-picture-stats' />
            <h4 className='user-name-stats'>{user.name}</h4>
            <h5 className='user-location-stats'>{user.location}</h5>
          </div>
          <div className='rider-records'>
            <h3>All-Time Records</h3>
            <p>Biggest Ride: {stats.biggestRideDistance}</p>
            <p>Biggest Climb: {stats.biggestElevation}</p>
          </div>
        </article>
        <article className='rider-recent-stats'>
          <h3>Recent Rides</h3>
          <p>Rides: {stats.recentRides.count}</p>
          <p>Distance: {stats.recentRides.distance}</p>
          <p>Time: {stats.recentRides.time}</p>
          <p>Gain: {stats.recentRides.gain}</p>
        </article>
        <article className='rider-year-stats'>
          <h3>Year to Date</h3>
          <p>Rides: {stats.yearToDate.count}</p>
          <p>Distance: {stats.yearToDate.distance}</p>
          <p>Time: {stats.yearToDate.time}</p>
          <p>Gain: {stats.yearToDate.gain}</p>
        </article>
        <article className='rider-life-stats'>
          <h3>Lifetime</h3>
          <p>Rides: {stats.lifetime.count}</p>
          <p>Distance: {stats.lifetime.distance}</p>
          <p>Time: {stats.lifetime.time}</p>
          <p>Gain: {stats.lifetime.gain}</p>
        </article>
      </div>
    </section>
  );
};

RiderStats.propTypes = {
  user: PropTypes.object,
  stats: PropTypes.object
};

export const mapStateToProps = (state) => ({
  user: state.user,
  stats: state.stats
});

export default withRouter(connect(mapStateToProps, null)(RiderStats));