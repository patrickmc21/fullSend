import React from 'react';
import PropTypes from 'prop-types';

import './RideCard.css';

const RideCard = ({ride}) => {
  const {
    distance, 
    elapsedTime, 
    date, 
    trailName, 
    location, 
    difficulty, 
    img, 
    summary 
  } = ride;

  return (
    <article className='ride-card'>
      <div className='ride-header'>
        <h6 className='ride-date'>{date}</h6>
        <img 
          src={img} 
          alt={trailName}
          className='ride-image' />
      </div>
      <div className='ride-trail'>
        <h2 className='ride-trail-name'>
          {trailName}
          <div className={difficulty}></div>
        </h2>
        <h3 className='ride-location'>{location}</h3>
        <p className='ride-summary'>{summary}</p>
      </div>
      <div className='ride-stats'>
        <h4 className='ride-distance'>Distance: {distance}</h4>
        <h4 className='ride-time'>Duration: {elapsedTime}</h4>
      </div>
    </article>
  );
};

RideCard.propTypes = {
  ride: PropTypes.object
};

export default RideCard;