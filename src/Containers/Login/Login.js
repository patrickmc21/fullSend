import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { redirectLogin } from '../../api/external-api-calls/getAthlete';
import getToken from '../../api/external-api-calls/getToken';
import getUserId from '../../api/internal-api-calls/getUserId';
import createUserId from '../../api/internal-api-calls/createUserId';
import getRides from '../../api/internal-api-calls/getUserRides';
import * as actions from '../../Actions';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      redirected: false,
      tempToken: '',
      errorStatus: ''
    };
  }

  componentDidMount() {
    this.handleRedirection(window.location);
  }

  handleRedirection = (location) => {
    if (location.search.includes('code')) {
      const history = location.href;
      const tempToken = history.substr(history.length - 40);
      this.setState(
        {
          redirected: true,
          tempToken
        }
      );
    }
  };

  handleClickAuthorize = () => {
    redirectLogin();
  };

  handleClickEnter = async () => {
    const userId = await this.loginUser();
    this.getUserRides(userId);
  };

  loginUser = async () => {
    const athleteInfo = await getToken(this.state.tempToken);
    /* eslint-disable camelcase */
    const { access_token, athlete } = athleteInfo;
    /* eslint-enable camelcase */
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
      /* eslint-disable camelcase */
      token: access_token,
      /* eslint-enable camelcase */
      id: userId ? userId.id : null,
      stravaId: athlete.id
    };
    this.props.addUser(user);
    return userId ? userId.id : null;
  };

  getUserRides = async (userId) => {
    const userRides = await getRides(userId);
    this.props.updateRides(userRides);
  }



  render() {
    const { redirected, errorStatus } = this.state;
    return (
      <div className='login-page'>
        <div className='login-container'>
          <h1 className='login-logo'>fullSend</h1>
          {!redirected && 
            <button 
              className='authorize-strava' 
              onClick={this.handleClickAuthorize}>
            </button>}
          {redirected && 
            <div className='enter-container'>
              <NavLink 
                to='/main' 
                onClick={this.handleClickEnter}
                className='enter-site'>
                  Enter
              </NavLink>
            </div>
          }
          { errorStatus && <p className='error-status'>{errorStatus}</p>}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func,
  updateRides: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.signInUser(user)),
  updateRides: rides => dispatch(actions.updateRides(rides))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
