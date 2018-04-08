import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../Containers/Header/Header';
import Nav from '../Nav/Nav';
import RideContainer from '../../Containers/RideContainer/RideContainer';
import Footer from '../Footer/Footer';

import './Main.css';

const Main = (props) => {

  return (
    <div>
      <Header />
      <main>
        <Nav />
        <Route exact path='/main' render={() => {
          return <RideContainer />
        }} />
        <Route exact path='/main/rides' render={() => {
          return <RideContainer />
        }} />
      </main>
      <Footer />
    </div>
  )
};

export default Main;