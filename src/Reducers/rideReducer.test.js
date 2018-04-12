import rideReducer from './rideReducer';
import * as Actions from '../Actions';
import * as mock from '../mock-data/mock-data';

describe('rideReducer', () => {

  it('should return default state', () => {
    const expected = [];
    const results = rideReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should update rides in state', () => {
    const newRides = mock.mockRides;
    const state = [mock.mockRide];
    const expected = [...state, ...newRides];
    const results = rideReducer(state, Actions.updateRides(newRides));
    expect(results).toEqual(expected);
  });

  it('should clear rides in state', () => {
    const state = [mock.mockRide];
    const expected = [];
    const results = rideReducer(state, Actions.clearRides('1'));
    expect(results).toEqual(expected);
  });
});