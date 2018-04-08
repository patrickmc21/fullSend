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
    <main>
      <Header />
      <Nav />
      <Route to='/main/rides' render={() => {
        return <RideContainer />
      }} />
      <Footer />
    </main>
  )
};

export default Main;