import dateReducer from './dateReducer';
import * as Actions from '../Actions';

describe('dateReducer', () => {

  let mockState;

  beforeEach(() => {
    mockState = {};
  });

  it('should return default state', () => {
    const expected = 'All';
    const results = dateReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should return a month on CHANGE_MONTH', () => {
    const expected = 'May';
    const results = dateReducer(mockState, Actions.changeMonth('May'));
    expect(results).toEqual(expected);
  });
});