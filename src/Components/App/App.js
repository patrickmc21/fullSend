import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../Containers/Login/Login';
import Main from '..//Main/Main';
import './App.css';


const App = () => {
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

export default App;
