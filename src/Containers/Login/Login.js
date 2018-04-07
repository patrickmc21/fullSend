import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { redirectLogin } from '../../api/external-api-calls/getAthlete';
import getToken from '../../api/external-api-calls/getToken';
import { getUserId } from '../../api/internal-api-calls/getUserId';
import { createUserId } from '../../api/internal-api-calls/createUserId';
import getRides from '../../api/internal-api-calls/getUserRides';
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
  };

  handleClickEnter = async () => {
    const userId = await this.loginUser();
    this.getUserRides(userId);
  };

  loginUser = async () => {
    const athleteInfo = await getToken(this.state.tempToken);
    const { access_token, athlete } = athleteInfo;
    const signInInfo = { email: athlete.email, password: athlete.id};
    let userId = await getUserId(signInInfo);
    if (!userId) {
      const newUser = {name: athlete.firstname, ...signInInfo};
      try {
        userId = await createUserId(newUser);
      } catch (error) {
        this.setState({errorStatus: error.message});
      }
    }
    const user = {
      name: athlete.firstname,
      token: access_token,
      id: userId.id
    };
    this.props.addUser(user);
    return userId.id;
  };

  getUserRides = async (userId) => {
    const userRides = await getRides(userId);
    this.props.addRides(userRides);
  }



  render() {
    const { redirected, tempToken, errorStatus } = this.state
    return (
      <div>
        {!redirected && <button className='authorize-strava' onClick={this.handleClickAuthorize}></button>}
        {redirected && <NavLink to='/main' onClick={this.handleClickEnter}>Enter</NavLink>}
        { errorStatus && <p>{errorStatus}</p>}
      </div>
    )
  }
}

Login.propTypes = {
  addUser: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.signInUser(user)),
  addRides: rides => dispatch(actions.addRides(rides))
})

export default withRouter(connect(null, mapDispatchToProps)(Login))
