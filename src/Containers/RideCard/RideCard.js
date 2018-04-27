import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateRide from '../../api/internal-api-calls/updateRide.js';
import * as actions from '../../Actions';

import './RideCard.css';

const RideCard = ({ride, updateSingleRide}) => {
  const {
    distance, 
    elapsedTime, 
    date, 
    trailName, 
    location, 
    difficulty, 
    img, 
    summary,
    rideId,
    details 
  } = ride;

  const userDetails = details.length > 0 ? details : 'Click to add details!';

  const handleBlur = (event) => {
    const newDetails = event.target.innerText;
    const updatedRide = {...ride, details: newDetails};
    updateRide(updatedRide);
    updateSingleRide(updatedRide);
  }

  return (
    <article className='ride-card'>
      <div className='ride-header'>
        <div className={difficulty}></div>
        <h6 className='ride-date'>{date}</h6>
        <img 
          src={img} 
          alt={trailName}
          className='ride-image' />
      </div>
      <div className='ride-trail'>
        <h2 className='ride-trail-name'>
          {trailName}
        </h2>
        <h3 className='ride-location'>{location}</h3>
        <p className='ride-summary'>{summary}</p>
      </div>
      <div className='ride-stats'>
        <h4 className='ride-distance'>
          <span className='type'>
            Distance:
          </span> 
          {distance}
        </h4>
        <h4 className='ride-time'>
          <span className='type'>
          Duration: 
          </span>
          {elapsedTime}
        </h4>
        <h4 className='ride-details'>
          <span className='type'>
          Details: 
          </span>
          <span 
            className='details'
            contentEditable={true}
            onBlur={handleBlur}>
            {userDetails}
          </span>
        </h4>
      </div>
    </article>
  );
};

RideCard.propTypes = {
  ride: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  updateSingleRide: ride => dispatch(actions.updateSingleRide(ride))
});

export default connect(null, mapDispatchToProps)(RideCard);