import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../../Actions';
import getAthleteInfo from  '../../api/external-api-calls/getAthleteInfo';

import './Header.css';

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      img: ''
    }
  }

  componentDidUpdate = async () => {
    const { token } = this.props.user;
    if (!this.state.name && token) {
      console.log(this.props.user);
      console.log(token);
      const user = await getAthleteInfo(token);
      console.log(user);
      this.setState({
        name: `${user.firstname} ${user.lastname}`,
        location: `${user.city}, ${user.state}`,
        img: user.profile_medium
      })
    }
  }

  render() {

    const { name, location, img } = this.state;
    return(
      <header className='app-header'>
        <NavLink 
          to='/main'
          className='logo-link'
        >
          <h1 className='logo'>fullSend</h1>
        </NavLink>
        <aside className='user-info'>
          <img 
            src={img} 
            alt='user profile picture'
            className='user-profile-picture' />
          <h4 className='user-name'>{name}</h4>
          <h5 className='user-location'>{location}</h5>
        </aside>
      </header>
    )
  }
};

Header.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func
}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: id => dispatch(actions.logoutUser(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));