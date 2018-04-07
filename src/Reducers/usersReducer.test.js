import usersReducer from './usersReducer';
import * as Actions from '../Actions';
import * as mock from '../mock-data/mock-data';

describe('usersReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const results = usersReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should add user to state', () => {
    const user = mock.mockNewUser
    const expected = user;
    const results = usersReducer(undefined, Actions.addNewUser(user));
    expect(results).toEqual(expected);
  })
});