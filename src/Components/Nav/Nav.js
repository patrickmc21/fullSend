import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {

  return (
    <nav className='app-nav'>
      <div className='nav-wrapper'>
        <NavLink 
          to='/main/rides' 
          className='nav-btn' 
          activeClassName='active-nav'
        >
          Rides
        </NavLink>
        <NavLink 
          to='/main/bikes' 
          className='nav-btn' 
          activeClassName='active-nav'
        >
          Bikes
        </NavLink>
        <NavLink 
          to='/main/stats' 
          className='nav-btn' 
          activeClassName='active-nav'
        >
          Rider Stats
        </NavLink>
        <NavLink 
          to='/main/todos' 
          className='nav-btn' 
          activeClassName='active-nav'
        >
          Trails To Do
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;