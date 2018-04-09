import React from 'react';
import { shallow } from 'enzyme';
import { redirectLogin } from '../../api/external-api-calls/getAthlete';
import getToken from '../../api/external-api-calls/getToken';
import { getUserId } from '../../api/internal-api-calls/getUserId';
import { createUserId } from '../../api/internal-api-calls/createUserId';
import getRides from '../../api/internal-api-calls/getUserRides';

jest.mock('../../api/external-api-calls/getAthlete');
jest.mock('../../api/external-api-calls/getToken');
jest.mock('../../api/internal-api-calls/getUserId');
jest.mock('../../api/internal-api-calls/createUserId');
jest.mock('../../api/internal-api-calls/getUserRides');

import { Login, mapDispatchToProps } from './Login';

describe('Login', () => {

  let wrapper;
  let mockAddUser;
  let mockAddRides;
  let mockToken;
  let mockLocation;

  beforeEach(() => {
    mockToken = '12345qwert09876jhgfd75849quthf76453bfhgj';
    mockLocation = {
      search: 'main',
      href: mockToken
    }
    mockAddUser = jest.fn();
    mockAddRides = jest.fn();
    wrapper = shallow(
      <Login
        addUser={mockAddUser}
        addRides={mockAddRides} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot once redirected', () => {
    wrapper.setState({redirected: true});
    expect(wrapper).toMatchSnapshot();
  });

  it('should run handleRedirection on mount', () => {
    wrapper = shallow(
      <Login
        addUser={mockAddUser}
        addRides={mockAddRides} />,
      {disableLifecycleMethods: true}
    );
    const spy = jest.spyOn(wrapper.instance(), 'handleRedirection');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should set redirected state if location includes code', () => {
    wrapper = shallow(
      <Login
        addUser={mockAddUser}
        addRides={mockAddRides} />,
      {disableLifecycleMethods: true}
    );
    mockLocation.search = 'code';
    const expected = true;
    wrapper.instance().handleRedirection(mockLocation);
    expect(wrapper.state().redirected).toEqual(expected);
  });

  it('should set tempToken state if location includes code', () => {
    wrapper = shallow(
      <Login
        addUser={mockAddUser}
        addRides={mockAddRides} />,
      {disableLifecycleMethods: true}
    );
    mockLocation.search = 'code';
    const expected = mockToken;
    wrapper.instance().handleRedirection(mockLocation);
    expect(wrapper.state().tempToken).toEqual(expected);
  });

  it('should run redirectLogin on handleClickAuthorize', () => {
    wrapper.instance().handleClickAuthorize();
    expect(redirectLogin).toHaveBeenCalled();
  });

  it('should run getToken on running loginUser', async () => {
    wrapper.setState({tempToken: 1});
    const expected = wrapper.state().tempToken;
    await wrapper.instance().loginUser();
    expect(getToken).toHaveBeenCalledWith(expected);
  });  

});

describe('mapDispatchToProps', () => {

});