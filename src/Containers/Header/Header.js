import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../../Components/Nav/Nav';

import * as actions from '../../Actions';

import './Header.css';

export class Header extends Component {
 
  handleLogout = () => {
    const { 
      user, 
      logoutUser, 
      clearRides,
      clearBikes,
      clearStats,
      clearTodos,
      changeMonth
    } = this.props;
    
    logoutUser(user.id);
    clearRides(user.id);
    clearBikes();
    clearStats();
    clearTodos();
    changeMonth('All');
  }

  handleClick = () => {
    this.props.changeMonth('All');
  }

  render() {

    const { name, location, img } = this.props.user;
    return (
      <header className='app-header'>
        <NavLink 
          to='/'
          className='logout'
          onClick={this.handleLogout}
        >
        Logout
        </NavLink>
        {this.props.user &&
        <aside className='user-info'>
          <img 
            src={img} 
            alt='user profile'
            className='user-profile-picture' />
          <h4 className='user-name'>{name}</h4>
          <h5 className='user-location'>{location}</h5>
        </aside>}
        <NavLink 
          to='/main'
          className='logo-link'
          onClick={this.handleClick}
        >
          <h1 className='logo'>fullSend</h1>
        </NavLink>
        <Nav />
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func,
  clearRides: PropTypes.func,
  changeMonth: PropTypes.func,
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: id => dispatch(actions.logoutUser(id)),
  clearRides: id => dispatch(actions.clearRides(id)),
  changeMonth: month => dispatch(actions.changeMonth(month)),
  clearStats: () => dispatch(actions.clearRiderStats()),
  clearBikes: () => dispatch(actions.clearBikes()),
  clearTodos: () => dispatch(actions.clearTodos())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));