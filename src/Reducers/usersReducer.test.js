import usersReducer from './usersReducer';
import {
  signInUser,
  addUserStrava,
  logoutUser 
} from '../Actions';
import * as mock from '../mock-data/mock-data';

describe('usersReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const results = usersReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should add user to state', () => {
    const user = mock.mockReturnUser;
    const expected = user;
    const results = usersReducer(undefined, signInUser(user));
    expect(results).toEqual(expected);
  });

  it('should add users strava info', () => {
    const expected = {...mock.mockReturnUser, ...mock.mockStravaUser};
    const mockState = mock.mockReturnUser;
    const results = usersReducer(mockState, addUserStrava(mock.mockStravaUser));
    expect(results).toEqual(expected);
  });

  it('should remove user from state', () => {
    const user = mock.mockUser;
    const id = user.id;
    const expected = {};
    const results = usersReducer(user, logoutUser(id));
    expect(results).toEqual(expected);
  });
});