import riderStatsReducer from './riderStatsReducer';
import { addRiderStats, clearRiderStats } from '../Actions';

import { mockUserStravaInfo } from '../mock-data/mock-data';

describe('riderStatsReducer', () => {
  it('should return default state', () => {
    const expected = {};
    const results = riderStatsReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should add rider stats', () => {
    const expected = mockUserStravaInfo;
    const results = riderStatsReducer(undefined, addRiderStats(expected));
    expect(results).toEqual(expected);
  }); 

  it('should clear rider stats', () => {
    const mockState = mockUserStravaInfo;
    const expected = {};
    const results = riderStatsReducer(mockState, clearRiderStats());
    expect(results).toEqual(expected);
  });
});