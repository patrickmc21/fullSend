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
          <h3>All-Time Records</h3>
          <p>
            <span className='type'>
              Biggest Ride:
            </span> 
            {stats.biggestRideDistance}
          </p>
          <p>
            <span className='type'>
              Biggest Climb:
            </span> 
            {stats.biggestElevation}
          </p>
        </article>
        <article className='rider-recent-stats'>
          <h3>Recent Rides</h3>
          <p>
            <span className='type'>
              Rides:
            </span> 
            {stats.recentRides.count}
          </p>
          <p>
            <span className='type'>
              Distance:
            </span> 
            {stats.recentRides.distance}
          </p>
          <p>
            <span className='type'>
              Time:
            </span> 
            {stats.recentRides.time}
          </p>
          <p>
            <span className='type'>
              Gain:
            </span> 
            {stats.recentRides.gain}
          </p>
        </article>
        <article className='rider-year-stats'>
          <h3>Year to Date</h3>
          <p>
            <span className='type'>
              Rides:
            </span> 
            {stats.yearToDate.count}
          </p>
          <p>
            <span className='type'>
              Distance:
            </span> 
            {stats.yearToDate.distance}
          </p>
          <p>
            <span className='type'>
              Time:
            </span> 
            {stats.yearToDate.time}
          </p>
          <p>
            <span className='type'>
              Gain:
            </span> 
            {stats.yearToDate.gain}
          </p>
        </article>
        <article className='rider-life-stats'>
          <h3>Lifetime</h3>
          <p>
            <span className='type'>
              Rides:
            </span> 
            {stats.lifetime.count}
          </p>
          <p>
            <span className='type'>
              Distance:
            </span> 
            {stats.lifetime.distance}
          </p>
          <p>
            <span className='type'>
              Time:
            </span> 
            {stats.lifetime.time}
          </p>
          <p>
            <span className='type'>
              Gain:
            </span> 
            {stats.lifetime.gain}
          </p>
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