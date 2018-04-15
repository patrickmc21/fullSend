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

describe('addUserStrava', () => {
  it('should return a type of ADD_USER_STRAVA', () => {
    const stravaInfo = mock.mockUserStravaInfo;
    const expected = {
      type: 'ADD_USER_STRAVA',
      stravaInfo
    };
    const results = Actions.addUserStrava(stravaInfo);
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
  
describe('clearRides', () => {
  it('should return a type of CLEAR_RIDES', () => {
    const mockId = 1;
    const expected = {
      type: 'CLEAR_RIDES',
      id: mockId
    };
    const results = Actions.clearRides(mockId);
    expect(results).toEqual(expected);
  }); 
}); 

describe('changeMonth', () => {
  it('should return a type of CHANGE_MONTH', () => {
    const month = 'May';
    const expected = {
      type: 'CHANGE_MONTH',
      month
    };
    const results = Actions.changeMonth(month);
    expect(results).toEqual(expected);
  });
});

describe('addRiderStats', () => {
  it('should return a type of ADD_RIDER_STATS', () => {
    const riderStats = mock.mockUserStravaInfo;
    const expected = {
      type: 'ADD_RIDER_STATS',
      riderStats
    };
    const results = Actions.addRiderStats(riderStats);
    expect(results).toEqual(expected);
  });
});

describe('clearRiderStats', () => {
  it('should return a type of CLEAR_RIDER_STATS', () => {
    const expected = {
      type: 'CLEAR_RIDER_STATS'
    };

    const results = Actions.clearRiderStats();
    expect(results).toEqual(expected);
  });
});

describe('addBikes', () => {
  it('should return a type of ADD_BIKES', () => {
    const bikes = mock.mockBikes;
    const expected = {
      type: 'ADD_BIKES',
      bikes
    };
    const results = Actions.addBikes(bikes);
    expect(results).toEqual(expected);
  });
});

describe('addTodos', () => {
  it('should return a type of ADD_TODOS', () => {
    const todos = mock.mockTodos;
    const expected = {
      type: 'ADD_TODOS',
      todos
    };
    const results = Actions.addTodos(todos);
    expect(results).toEqual(expected);
  });
});