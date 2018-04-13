import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../../Containers/Header/Header';
import MainContent from '../MainContent/MainContent';
import RideContainer from '../../Containers/RideContainer/RideContainer';
import RiderStats from '../../Containers/RiderStats/RiderStats';
import Footer from '../Footer/Footer';

import './Main.css';

const Main = () => {

  return (
    <div>
      <Header />
      <main>
        <Route exact path='/main' render={() => {
          return <MainContent />;
        }} />
        <Route exact path='/main/rides' render={() => {
          return <RideContainer />;
        }} />
        <Route exact path='/main/stats' render={() => {
          return <RiderStats />;
        }} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;