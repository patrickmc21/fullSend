import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { redirectLogin } from '../../api/api-calls/getAthlete';
import getToken from '../../api/api-calls/getToken';
import { getUserId } from '../../api/api-calls/getUserId';
import { createUserId } from '../../api/api-calls/createUserId';
import * as actions from '../../Actions';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirected: false,
      tempToken: ''
    }
  }

  componentDidMount() {
    if (window.location.search.includes('code')) {
      const history = window.location.href;
      const tempToken = history.substr(history.length - 40);
      this.setState(
        {
          redirected: true,
          tempToken
        }
      );
    }
  }

  handleClickAuthorize = () => {
    redirectLogin();
  }

  loginUser = async () => {
    const athleteInfo = await getToken(this.state.tempToken);
    const { access_token, athlete } = athleteInfo;
    const signInInfo = { email: athlete.email, password: athlete.id};
    console.log(athlete);
    console.log(signInInfo);
    let userId = await getUserId(signInInfo);
    if (!userId) {
      const newUser = {name: athlete.firstname, ...signInInfo};
      try {
        userId = await createUserId(newUser);
      } catch (error) {
        console.log(error.message);
      }
    }
    const user = {
      name: athlete.firstname,
      token: access_token,
      id: userId.id
    };
    this.props.addUser(user);
  }



  render() {
    const { user, redirected, tempToken } = this.state
    return (
      <div>
        {!redirected && <button className='authorize-strava' onClick={this.handleClickAuthorize}></button>}
        {redirected && <NavLink to='/main' onClick={this.loginUser}>Enter</NavLink>}
      </div>
    )
  }
}

Login.propTypes = {

};

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.signInUser(user))
})

export default withRouter(connect(null, mapDispatchToProps)(Login))
