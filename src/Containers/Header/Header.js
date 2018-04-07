import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from '../../Actions';

import './Header.css';

export class Header extends Component {

  render() {

    return(
      <header>
        <h1 className='logo'>fullSend</h1>
        <aside></aside>
        
      </header>
    )
  }
};

Header.propTypes = {

}

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: id => dispatch(actions.logoutUser(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));