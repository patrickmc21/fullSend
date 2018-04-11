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
  let mockUpdateRides;
  let mockToken;
  let mockLocation;

  beforeEach(() => {
    mockToken = '12345qwert09876jhgfd75849quthf76453bfhgj';
    mockLocation = {
      search: 'main',
      href: mockToken
    }
    mockAddUser = jest.fn();
    mockUpdateRides = jest.fn();
    wrapper = shallow(
      <Login
        addUser={mockAddUser}
        updateRides={mockUpdateRides} />
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
        updateRides={mockUpdateRides} />,
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
        updateRides={mockUpdateRides} />,
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
        updateRides={mockUpdateRides} />,
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

  it('should call loginUser on handleClickEnter', async () => {
    const spy = jest.spyOn(wrapper.instance(), 'loginUser');
    await wrapper.instance().handleClickEnter();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getUserRides on handleClickEnter', async () => {
    wrapper.setState({tempToken: 2});
    const spy = jest.spyOn(wrapper.instance(), 'getUserRides');
    await wrapper.instance().handleClickEnter();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should run getToken on running loginUser', async () => {
    wrapper.setState({tempToken: 1});
    const expected = wrapper.state().tempToken;
    await wrapper.instance().loginUser();
    expect(getToken).toHaveBeenCalledWith(expected);
  });  

  it('should run getUserId on running loginUser', async () => {
    wrapper.setState({tempToken: 1});
    const expected = {
      email: 'cool@msn.com',
      password: 123
    };
    await wrapper.instance().loginUser();
    expect(getUserId).toHaveBeenCalledWith(expected);
  });

  it('should run createUserId if a user does not exist', async () => {
    wrapper.setState({tempToken: 2});
    const expected = {
      name: 'Tim',
      email: 'lame@aol.com',
      password: 321
    };
    await wrapper.instance().loginUser();
    expect(createUserId).toHaveBeenCalledWith(expected);
  });

  it('should throw an error if createUserId fails', async () => {
    wrapper.setState({tempToken: 3});
    const expected = 'Bad'
    await wrapper.instance().loginUser();
    expect(wrapper.state().errorStatus).toEqual(expected)
  });

  it('should run addUser on loginUser', async () => {
    const expected = {
      name: 'Tim',
      token: 2,
      id: 1
    };
    wrapper.setState({tempToken: 2});
    await wrapper.instance().loginUser();
    expect(mockAddUser).toHaveBeenCalledWith(expected);
  });

  it('should return the user id on loginUser', async () => {
    const expected = 1
    wrapper.setState({tempToken: 2});
    const results = await wrapper.instance().loginUser();
    expect(results).toEqual(1)
  });

  it('should call getRides on getUserRides', async () => {
    const expected = 1
    await wrapper.instance().getUserRides(1);
    expect(getRides).toHaveBeenCalledWith(expected);
  });

  it('should call addRides on running getUserRides', async () => {
    const expected = await getRides(1);
    await wrapper.instance().getUserRides(1);
    expect(mockUpdateRides).toHaveBeenCalledWith(expected);
  })

});

describe('mapDispatchToProps', () => {

  let mapped;
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mapped = mapDispatchToProps(mockDispatch);
  });

  it('should map addUser to props', () => {
    const mockUser =  {
        name: 'Tim',
        token: 2,
        id: 1
      }
    const expected = {
      type: 'SIGN_IN_USER',
      user: mockUser
    };
    mapped.addUser(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should map addRides to props', async () => {
    const mockRides = await getRides();
    const expected = {
      type: 'UPDATE_RIDES',
      rides: mockRides
    };
    mapped.updateRides(mockRides);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});