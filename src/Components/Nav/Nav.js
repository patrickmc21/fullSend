import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = () => {

  return (
    <nav>
      <NavLink to='/main/rides' className='nav-btn' activeClassName='active-nav'/>
    </nav>
  )
};

export default Nav;