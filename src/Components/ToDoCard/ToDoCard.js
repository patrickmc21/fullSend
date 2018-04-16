import React from 'react';
import PropTypes from 'prop-types';

import './ToDoCard.css';
import defaultImg from './images/default-bkgrnd.jpg';

const ToDoCard = ({todo}) => {

  const {
    name, 
    summary, 
    difficulty, 
    stars, 
    location, 
    url,
    imgSmallMed, 
    length, 
    ascent, 
    high, 
    low,
    longitude,
    latitude
  } = todo;

  const img = imgSmallMed ? imgSmallMed : defaultImg;

  return (
    <article className='todo-card'>
      <div className='todo-header'>
        <div className={difficulty}></div>
        <h6 className='todo-rating'>{stars} stars</h6>
        <img 
          src={img} 
          alt={name}
          className='todo-image' />
      </div>
      <div className='todo-trail'>
        <h2 className='todo-trail-name'>
          {name}
        </h2>
        <h3 className='todo-location'>{location}</h3>
        <h6 className='todo-latlong'>{latitude}°, {longitude}°</h6>
        <p className='todo-summary'>{summary}</p>
      </div>
      <div className='todo-stats'>
        <h4 className='todo-distance'>
          <span className='type'>
            Distance:
          </span> 
          {length} miles
        </h4>
        <h4 className='todo-gain'>
          <span className='type'>
          Gain: 
          </span>
          {ascent}
        </h4>
        <h4 className='todo-high'>
          <span className='type'>
          High: 
          </span>
          {high} ft
        </h4>
        <h4 className='todo-low'>
          <span className='type'>
          Low: 
          </span>
          {low} ft
        </h4>
      </div>
      <a 
        href={url}
        className='todo-link'> 
        See on MTB Project 
      </a>
    </article>
  );
};

ToDoCard.propTypes = {
  todo: PropTypes.object
};

export default ToDoCard;