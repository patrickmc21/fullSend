import React from 'react';
import PropTypes from 'prop-types';

import stravaImg from '../../strava-brand-images/powered_by_strava.svg';
import mtbImg from '../../mtbProject-images/logoHex.svg';
import './Footer.css';

const Footer = () => {

  return (
    <footer>
      <div className='api-logos'>
        <img src={stravaImg} alt='Strava Logo' />
        <img src={mtbImg} alt='MTB Project logo' />
      </div>
    </footer>
  )
};

export default Footer;