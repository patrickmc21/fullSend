import * as Actions from './index';
import * as mock from '../mock-data/mock-data';

describe('addNewUser', () => {
  it('should return a type of ADD_NEW_USER', () => {
    const newUser = mock.mockNewUser;
    const expected = {
      type: 'ADD_NEW_USER',
      user: newUser
    }
    const results = Actions.addNewUser(newUser);
    expect(results).toEqual(expected);
  });
});

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