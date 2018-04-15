import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mock-data/mock-data';
import { 
  BikeContainer, 
  mapStateToProps, 
  mapDispatchToProps 
} from './BikeContainer';

import getBikes from '../../api/external-api-calls/getBikes';
jest.mock('../../api/external-api-calls/getBikes');


describe('BikeContainer', () => {

  let mockUser;
  let mockBikes;
  let mockAddBikes;
  let wrapper;

  beforeEach(() => {
    mockUser = {...mock.mockUser,...mock.mockStravaUser};
    mockBikes = mock.mockBikes;
    mockAddBikes = jest.fn();
    wrapper = shallow(
      <BikeContainer
        user={mockUser}
        bikes={mockBikes}
        addBikes={mockAddBikes}/>,
      {disableLifeCycleMethods: true}
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getBikes on getUserBikes', async () => {
    const expected = [mockUser.bikes[0].id, mockUser.token];
    wrapper.instance().getUserBikes(mockUser.bikes, mockUser.token);
    expect(getBikes).toHaveBeenCalledWith(...expected);
  });

  it('should return an array of bikes on getUserBikes', async () => {
    const expected = mockBikes;
    const results = await wrapper.instance().getUserBikes(mockUser.bikes, mockUser.token);
    expect(results).toEqual([expected]);
  });

  it('should getUserBikes on mount if no bikes present', () => {
    mockBikes = [];
    wrapper = shallow(
      <BikeContainer
        user={mockUser}
        bikes={mockBikes}
        addBikes={mockAddBikes}/>,
      {disableLifeCycleMethods: true}
    )
    const spy = jest.spyOn(wrapper.instance(), 'getUserBikes');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should call addBikes on mount if no bikes present', async () => {
    mockBikes = [];
    wrapper = shallow(
      <BikeContainer
        user={mockUser}
        bikes={mockBikes}
        addBikes={mockAddBikes}/>,
      {disableLifeCycleMethods: true}
    )
    await wrapper.instance().componentDidMount();
    expect(mockAddBikes).toHaveBeenCalled();
  });

});

describe('mapStateToProps', () => {

  let mockState;
  let mapped;

  beforeEach(() => {
    mockState = {
      user: mock.mockUser,
      bikes: mock.mockBikes
    };
    mapped = mapStateToProps(mockState);
  });

  it('should map user to props', () => {
    const expected = mock.mockUser;
    expect(mapped.user).toEqual(expected);
  });

  it('should map bikes to props', () => {
    const expected = mock.mockBikes;
    expect(mapped.bikes).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should map addBikes to props', () => {
    const mockDispatch = jest.fn();
    const expected = {
      type: 'ADD_BIKES',
      bikes: mock.mockBikes
    };
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addBikes(mock.mockBikes);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});
