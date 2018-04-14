import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from '../../Components/Nav/Nav';


import * as actions from '../../Actions';
import getAthleteInfo from  '../../api/external-api-calls/getAthleteInfo';

import './Header.css';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      img: ''
    };
  }

  componentDidUpdate = async () => {
    const { token } = this.props.user;
    if (!this.state.name && token) {
      const userInfo = await getAthleteInfo(token);
      const user = {
        name: `${userInfo.firstname} ${userInfo.lastname}`,
        location: `${userInfo.city}, ${userInfo.state}`,
        img: userInfo.profile_medium,
        bikes: userInfo.bikes
      };
      this.props.addStravaInfo(user);
      this.setState(
        {
          name: user.name, 
          location: user.location, 
          img: user.img
        }
      );
    }
  }

  handleLogout = () => {
    const { user, logoutUser, clearRides } = this.props;
    logoutUser(user.id);
    clearRides(user.id);
  }

  handleClick = () => {
    this.props.changeMonth('All');
  }

  render() {

    const { name, location, img } = this.state;
    return (
      <header className='app-header'>
        <NavLink 
          to='/main'
          className='logo-link'
          onClick={this.handleClick}
        >
          <h1 className='logo'>fullSend</h1>
        </NavLink>
        <Nav />
        <NavLink 
          to='/'
          className='logout'
          onClick={this.handleLogout}
        >
        Logout
        </NavLink>
        {name.length > 0 &&
        <aside className='user-info'>
          <img 
            src={img} 
            alt='user profile'
            className='user-profile-picture' />
          <h4 className='user-name'>{name}</h4>
          <h5 className='user-location'>{location}</h5>
        </aside>}
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func,
  clearRides: PropTypes.func,
  changeMonth: PropTypes.func
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: id => dispatch(actions.logoutUser(id)),
  clearRides: id => dispatch(actions.clearRides(id)),
  changeMonth: month => dispatch(actions.changeMonth(month)),
  addStravaInfo: info => dispatch(actions.addUserStrava(info))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));