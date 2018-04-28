import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../Actions';
import PropTypes from 'prop-types';

import BikeCard from '../../Components/BikeCard/BikeCard';

import './BikeContainer.css';

export class BikeContainer extends Component {

  createBikeCards = () => {
    return this.props.bikes.map(bike => {
      return <BikeCard key={bike.id} bike={bike} />;
    });
  }

  render() {
    const bikeCards = this.createBikeCards();
    return (
      <section className='bike-container'>
        <div className='bike-card-container'>
          {bikeCards}
        </div>
      </section>
    );
  }
}

BikeContainer.propTypes = {
  user: PropTypes.object,
  bikes: PropTypes.array,
};

export const mapStateToProps = (state) => ({
  user: state.user,
  bikes: state.bikes
});

/* eslint-disable max-len */
export default withRouter(connect(mapStateToProps)(BikeContainer));