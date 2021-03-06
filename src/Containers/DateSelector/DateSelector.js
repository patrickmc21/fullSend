import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../Actions';

import './DateSelector.css';

export class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.months = [
      'All',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  }

  handleSelection = (event) => {
    const { value } = event.target;
    this.props.changeMonth(value);
  }

  createSelections() {
    return this.months.map(month => {
      return (<option
        key={month} 
        value={month}
        className='month-option'>
        {month}
      </option>);
    });
  }

  render() {
    return (
      <form 
        onChange={this.handleSelection}
        className='month-form'>
        <label 
          htmlFor='month'
          className='month-label'>Choose Month</label>
        <select id='month'>
          {this.createSelections()}    
        </select>
      </form>
    );
  }
}

DateSelector.propTypes = {
  changeMonth: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  changeMonth: month => dispatch(actions.changeMonth(month))
});


export default withRouter(connect(null, mapDispatchToProps)(DateSelector));