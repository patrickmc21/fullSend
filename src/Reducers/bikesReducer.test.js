import bikesReducer from './bikesReducer';
import { addBikes } from '../Actions';

import { mockBikes } from '../mock-data/mock-data';

describe('bikesReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const results = bikesReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should add bikes on ADD_BIKES', () => {
    const expected = mockBikes;
    const results = bikesReducer(undefined, addBikes(mockBikes));
    expect(results).toEqual(expected);
  });
});