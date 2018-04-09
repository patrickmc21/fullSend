import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import getAthleteInfo from  '../../api/external-api-calls/getAthleteInfo';
import * as actions from '../../Actions';
jest.mock('../../api/external-api-calls/getAthleteInfo');

import { mockUserInfo, mockUser } from '../../mock-data/mock-data';

describe('Header', () => {

  let wrapper;
  let mockedUser;
  let mockedLogout;

  beforeEach(() => {
    mockedUser = mockUser;
    mockedLogout = jest.fn();
    wrapper = shallow(
      <Header user={mockedUser} logoutUser={mockedLogout} />
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
  it('should map logoutUser to props', () => {
    const mockDispatch = jest.fn();
    const expected = {
      type: 'LOGOUT_USER',
      id: mockUser.id
    };
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logoutUser(mockUser.id);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  })
})