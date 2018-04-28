import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { redirectLogin } from '../../api/external-api-calls/getAthlete';
import getToken from '../../api/external-api-calls/getToken';
import getUserId from '../../api/internal-api-calls/getUserId';
import createUserId from '../../api/internal-api-calls/createUserId';
import getRides from '../../api/internal-api-calls/getUserRides';
import getRiderStats from '../../api/external-api-calls/getRiderStats';
import cleanRiderStats from '../../api/helpers/cleanRiderStats';
import getAthleteInfo from  '../../api/external-api-calls/getAthleteInfo';
import getBikes from '../../api/external-api-calls/getBikes';
import getTrailsById from '../../api/external-api-calls/getTrailsById';
import getTodoIds from '../../api/external-api-calls/getTodoIds';

import * as actions from '../../Actions';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      redirected: false,
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
        }
      );
    }
  };

  handleClickAuthorize = () => {
    redirectLogin();
  };

  handleClickEnter = async () => {
    const { userId, token, stravaId, email } = await this.loginUser();
    try {
      const bikes = await this.getStravaInfo(token);
      this.getUserRides(userId);
      this.getRiderStats(stravaId, token);
      const bikesToAdd = await this.getUserBikes(bikes, token);
      this.props.addBikes(bikesToAdd);
      const todoRides = await this.getToDoRides(email);
      this.props.addTodos(todoRides);
    } catch (error) {
      this.setState({errorStatus: error})
    }
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
      email: athlete.email,
      /* eslint-disable camelcase */
      token: access_token,
      /* eslint-enable camelcase */
      id: userId ? userId.id : null,
      stravaId: athlete.id
    };
    this.props.addUser(user);
    return {
      userId: userId ? userId.id : null,
      email: athlete.email, 
      token: user.token,
      stravaId: user.stravaId
    };
  };

  getUserRides = async (userId) => {
    const userRides = await getRides(userId);
    userRides.sort((first, second) => second.epoch - first.epoch);
    this.props.updateRides(userRides);
  }

  getRiderStats = async (userId, token) => {
    const rawStats = await getRiderStats(userId, token);
    const cleanStats = cleanRiderStats(rawStats);
    this.props.riderStats(cleanStats);
  }

  getStravaInfo = async (token) => {
    const userInfo = await getAthleteInfo(token);
    const user = {
      name: `${userInfo.firstname} ${userInfo.lastname}`,
      location: `${userInfo.city}, ${userInfo.state}`,
      img: userInfo.profile_medium,
      bikes: userInfo.bikes
    };
    this.props.addStravaInfo(user);
    return user.bikes;
  }

  getUserBikes = (bikeArray, token) => {
    
    const bikesToAdd = bikeArray.map(async bike => {
      const bikeDetails = await getBikes(bike.id, token);
      return bikeDetails;
    });
    return Promise.all(bikesToAdd);
  }

  getToDoRides = async (email) => {
    const todoIds = await getTodoIds(email);
    const todoRides = await getTrailsById(todoIds);
    return todoRides.trails;
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
  updateRides: PropTypes.func,
  riderStats: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(actions.signInUser(user)),
  updateRides: rides => dispatch(actions.updateRides(rides)),
  riderStats: stats => dispatch(actions.addRiderStats(stats)),
  addStravaInfo: info => dispatch(actions.addUserStrava(info)),
  addBikes: bikes => dispatch(actions.addBikes(bikes)),
  addTodos: todos => dispatch(actions.addTodos(todos))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
