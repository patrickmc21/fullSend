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

  componentDidMount = async () => {
    const { token } = this.props.user;
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

  render() {
    const { user } = this.props;
    return(
      <header className='app-header'>
        <NavLink 
          to='/main'
          className='logo-link'
        >
          <h1 className='logo'>fullSend</h1>
        </NavLink>
        <aside className='user-info'>
          <h4 className='user-name'>{user.name}</h4>
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