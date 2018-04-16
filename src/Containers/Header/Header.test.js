import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import getAthleteInfo from  '../../api/external-api-calls/getAthleteInfo';
jest.mock('../../api/external-api-calls/getAthleteInfo');

import { mockUser } from '../../mock-data/mock-data';

describe('Header', () => {

  let wrapper;
  let mockedUser;
  let mockedLogout;
  let mockedClearRides;
  let mockedChangeMonth;
  let mockAddStravaInfo;

  beforeEach(() => {
    mockedUser = mockUser;
    mockedLogout = jest.fn();
    mockedClearRides = jest.fn();
    mockedChangeMonth = jest.fn();
    mockAddStravaInfo = jest.fn();
    wrapper = shallow(
      <Header 
        user={mockedUser} 
        logoutUser={mockedLogout}
        clearRides={mockedClearRides}
        changeMonth={mockedChangeMonth}
        addStravaInfo={mockAddStravaInfo} />
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

  it('should call getAthleteInfo on componentDidUpdate', async () => {
    const expected = mockedUser.token;
    await wrapper.instance().componentDidUpdate();
    expect(getAthleteInfo).toHaveBeenCalledWith(expected);
  });

  it('should call addStravaInfo on componentDidUpdate', async () => {
    await wrapper.instance().componentDidUpdate();
    expect(mockAddStravaInfo).toHaveBeenCalled();
  });

  it('should set errorStatus on bad request on mount', async () => {
    const expected = 'FAIL';
    mockAddStravaInfo = jest.fn().mockImplementation(() => {
      throw 'FAIL';
    });
    wrapper = shallow(
      <Header 
        user={mockedUser} 
        logoutUser={mockedLogout}
        clearRides={mockedClearRides}
        changeMonth={mockedChangeMonth}
        addStravaInfo={mockAddStravaInfo} />
    );
    await wrapper.instance().componentDidUpdate();
    expect(wrapper.state('errorStatus')).toEqual(expected);
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

  it('should map addStravaInfo to props', () => {
    const expected = {
      type: 'ADD_USER_STRAVA',
      stravaInfo: mockUser
    };
    mapped.addStravaInfo(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});