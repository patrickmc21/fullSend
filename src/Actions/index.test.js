import * as Actions from './index';
import * as mock from '../mock-data/mock-data';

describe('signInUser', () => {
  it('should return a type of SIGN_IN_USER', () => {
    const user = mock.mockReturnUser;
    const expected = {
      type: 'SIGN_IN_USER',
      user
    };
    const results = Actions.signInUser(user);
    expect(results).toEqual(expected);
  });
});

describe('logoutUser', () => {
  it('should return a type of LOGOUT_USER', () => {
    const userId = 1;
    const expected = {
      type: 'LOGOUT_USER',
      id: userId
    };
    const results = Actions.logoutUser(userId);
    expect(results).toEqual(expected);
  });
});


describe('updateRides', () => {
  it('should return a type of UPDATE_RIDES', () => {
    const mockRides = mock.mockRides;
    const expected = {
      type: 'UPDATE_RIDES',
      rides: mockRides
    };
    const results = Actions.updateRides(mockRides);
    expect(results).toEqual(expected);
  });
});