import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {

  return (
    <nav className='app-nav'>
      <NavLink 
        to='/main/rides' 
        className='nav-btn' 
        activeClassName='active-nav'
      >
        Rides
      </NavLink>
    </nav>
  );
};

export default Nav;