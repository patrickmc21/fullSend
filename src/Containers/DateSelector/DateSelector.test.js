import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../Actions';

import { DateSelector, mapDispatchToProps } from './DateSelector';

describe('DateSelector', () => {

  let wrapper;
  let mockChangeMonth;

  beforeEach(() => {
    mockChangeMonth = jest.fn();
    wrapper = shallow(<DateSelector changeMonth={mockChangeMonth}/>);

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call changeMonth on handleSelection', () => {
    const mockEvent = {target: {value: 'May'}};
    const expected = 'May';
    wrapper.instance().handleSelection(mockEvent);
    expect(mockChangeMonth).toHaveBeenCalledWith(expected);
  });

});

describe('mapDispatchToProps', () => {

  it('should map changeMonth to props', () => {
    const mockDispatch = jest.fn();
    const mockMonth = 'May';
    const expected = {
      type: 'CHANGE_MONTH',
      month: mockMonth
    };
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.changeMonth(mockMonth);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});