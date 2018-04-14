import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getBikes from '../../api/external-api-calls/getBikes';
import * as actions from '../../Actions';
import PropTypes from 'prop-types';

import './BikeContainer.css';

export class BikeContainer extends Component {

  async componentDidMount() {
    const { user, bikes } = this.props;
    if (bikes.length < 1) {
      const bikesToAdd = await this.getUserBikes(user.bikes, user.token)
      this.props.addBikes(bikesToAdd);
    }
  }

  getUserBikes = (bikeArray, token) => {
    
    const bikesToAdd = bikeArray.map(async bike => {
      const bikeDetails = await getBikes(bike.id, token);
      return bikeDetails;
    });
    return Promise.all(bikesToAdd);
  }

  createBikeCards = () => {
    return this.props.bikes.map(bike => {
      return <BikeCard key={bike.id} bike={bike} />
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
    )
  }
};

export const mapStateToProps = (state) => ({
  user: state.user,
  bikes: state.bikes
});

export const mapDispatchToProps = (dispatch) => ({
  addBikes: bikes => dispatch(actions.addBikes(bikes))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BikeContainer));