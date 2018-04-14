import React from 'react';
import PropTypes from 'prop-types';
import { convertMetersToMiles } from '../../api/helpers/rideCleaner';


import './BikeCard.css';

const BikeCard = ({bike}) => {
  const distance = convertMetersToMiles(bike.distance);

  return (
    <article className='bike-card'>
      <img
        className='bike-img'
        src={bike.description}
        alt='bike image' />
      <h3 className='bike-name'>"{bike.name}"</h3>
      <h4 className='bike-brand'>{bike.brand_name}</h4>
      <h4 className='bike-model'>{bike.model_name}</h4>
      <p className='bike-mileage'>Mileage: {distance}</p>
    </article>
  )
};

export default BikeCard;