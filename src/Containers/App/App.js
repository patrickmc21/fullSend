import React, { Component } from 'react';
import getToken from '../../api/api-calls/getToken';
import { redirectLogin } from '../../api/api-calls/getAthlete';
import { getAthleteActivities } from '../../api/api-calls/getAthleteActivities';
import { getTrails } from '../../api/api-calls/getTrails';
import './App.css';

class App extends Component {

  handleClickAuthorize = () => {
    redirectLogin();
  }

  handleClickFetch = async () => {
    const data = await getToken();
    console.log(data)
    const parsed = JSON.parse(data);
    console.log(parsed);
    const {athlete, access_token} = parsed;
    const start = 1519862401;
    const end = 1522540741;
    const activities = await getAthleteActivities(access_token, athlete.id, start, end);
    const [lat, long] = activities[2].start_latlng;
    getTrails(lat, long);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClickAuthorize}>Authorize</button>
        <button onClick={this.handleClickFetch}>Fetch</button>
      </div>
    );
  }
}

export default App;
