import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import getAthleteInfo from  '../../api/external-api-calls/getAthleteInfo';
jest.mock('../../api/external-api-calls/getAthleteInfo');

import { mockUserInfo, mockUser } from '../../mock-data/mock-data';

describe('Header', () => {

  let wrapper;
  let mockedUser;
  let mockedLogout;
  let mockedClearRides;
  let mockedChangeMonth;

  beforeEach(() => {
    mockedUser = mockUser;
    mockedLogout = jest.fn();
    mockedClearRides = jest.fn();
    mockedChangeMonth = jest.fn();
    wrapper = shallow(
      <Header 
        user={mockedUser} 
        logoutUser={mockedLogout}
        clearRides={mockedClearRides}
        changeMonth={mockedChangeMonth} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot after userInfo arrives', () => {
    wrapper.instance().componentDidUpdate();
    expect(wrapper).toMatchSnapshot();
  });

  it('should not update state if no user is present', () => {
    mockedUser = {name: '', token: '', id: null};
    wrapper = shallow(<Header user={mockedUser}/>);
    wrapper.instance().componentDidUpdate();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logoutUser on handleLogout', () => {
    const expected = mockUser.id;
    wrapper.instance().handleLogout();
    expect(mockedLogout).toHaveBeenCalledWith(expected);
  });

  it('should call clearRides on handleLogout', () => {
    const expected = mockUser.id;
    wrapper.instance().handleLogout();
    expect(mockedClearRides).toHaveBeenCalledWith(expected);
  });

  it('should call changeMonth on handleClick', () => {
    const expected = 'All';
    wrapper.instance().handleClick();
    expect(mockedChangeMonth).toHaveBeenCalledWith(expected);
  });
});

describe('mapStateToProps', () => {
  it('should return user state', () => {
    const mockState = {user: mockUser};
    const expected = mockUser;
    const mapped = mapStateToProps(mockState);
    expect(mapped.user).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {

  let mockDispatch;
  let mapped;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mapped = mapDispatchToProps(mockDispatch);
  });

  it('should map logoutUser to props', () => {
    const expected = {
      type: 'LOGOUT_USER',
      id: mockUser.id
    };
    mapped.logoutUser(mockUser.id);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should map clearRides to props', () => {
    const expected = {
      type: 'CLEAR_RIDES',
      id: mockUser.id
    };
    mapped.clearRides(mockUser.id);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it('should map changeMonth to props', () => {
    const expected = {
      type: 'CHANGE_MONTH',
      month: 'May'
    };
    mapped.changeMonth('May');
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});