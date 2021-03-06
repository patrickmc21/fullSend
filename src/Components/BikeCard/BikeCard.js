import React from 'react';
import PropTypes from 'prop-types';
import { convertMetersToMiles } from '../../api/helpers/rideCleaner';

import defaultImg from './images/default.jpeg';
import './BikeCard.css';

const BikeCard = ({bike}) => {
  const distance = convertMetersToMiles(bike.distance);
  const img = bike.description.includes('https://') ? 
    bike.description : defaultImg;
  return (
    <article className='bike-card'>
      <img
        className='bike-img'
        src={img}
        alt='bike image' />
      <h3 className='bike-name'>&quot;{bike.name}&quot;</h3>
      <h4 className='bike-brand'>{bike.brand_name}</h4>
      <h4 className='bike-model'>{bike.model_name}</h4>
      <p className='bike-mileage'>
        <span className='type'>Mileage:</span> 
        {distance}
      </p>
    </article>
  );
};

BikeCard.propTypes = {
  bike: PropTypes.object
};

export default BikeCard;