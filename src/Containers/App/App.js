import React, { Component } from 'react';
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
// import getToken from '../../api/api-calls/getToken';
// import { getAthleteActivities } from '../../api/api-calls/getAthleteActivities';
// import { getTrails } from '../../api/api-calls/getTrails';
import Login from '../Login/Login';
import Main from '../../Components/Main/Main';
import './App.css';


class App extends Component {

  // handleClickFetch = async () => {
  //   const data = await getToken();
  //   console.log(data)
  //   const parsed = JSON.parse(data);
  //   console.log(parsed);
  //   const {athlete, access_token} = parsed;
  //   const start = 1519862401;
  //   const end = 1522540741;
  //   const activities = await getAthleteActivities(access_token, athlete.id, start, end);
  //   const [lat, long] = activities[2].start_latlng;
  //   getTrails(lat, long);
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
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
