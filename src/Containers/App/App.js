import React, { Component } from 'react';
import getToken from '../../api/api-calls/getToken';
import { redirectLogin } from '../../api/api-calls/getAthlete';
import { getAthleteActivities } from '../../api/api-calls/getAthleteActivities';
import './App.css';

class App extends Component {

  handleClickAuthorize = () => {
    redirectLogin();
  }

  handleClickFetch = async () => {
    const data = await getToken();
    console.log(data);
    const {athlete, access_token} = data;
    console.log(athlete);
    const start = 1519862401;
    const end = 1522540741;
    getAthleteActivities(access_token, athlete.id, start, end)
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
