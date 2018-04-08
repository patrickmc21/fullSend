import React, { Component } from 'react';
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
// import getToken from '../../api/api-calls/getToken';
// import { getAthleteActivities } from '../../api/api-calls/getAthleteActivities';
// import { getTrails } from '../../api/api-calls/getTrails';
import Login from '../Login/Login';
import Main from '../../Components/Main/Main';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => {
          return (
            <Login />
          )
        }} />
        <Route path='/main' render={() => {
          return <Main />
        }} />
      </div>
    );
  }
}

export default App;
