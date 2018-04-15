import riderStatsReducer from './riderStatsReducer';
import * as actions from '../Actions';

import { mockUserStravaInfo } from '../mock-data/mock-data';

describe('riderStatsReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const results = riderStatsReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should add rider stats', () => {
    const expected = mockUserStravaInfo;
    const results = riderStatsReducer(undefined, actions.addRiderStats(expected));
    expect(results).toEqual(expected);
  }); 

  it('should clear rider stats', () => {
    const mockState = mockUserStravaInfo;
    const expected = {};
    const results = riderStatsReducer(mockState, actions.clearRiderStats());
    expect(results).toEqual(expected);
  });
});