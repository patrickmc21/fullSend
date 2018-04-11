import rideCleaner, 
{ 
  cleanDate, 
  convertMetersToMiles, 
  convertSecondsToHoursMins 
} from '../rideCleaner';

import * as mocks from '../../../mock-data/mock-data';

describe('cleanDate', () => {
  it('should clean the athlete date', () => {
    const rawDate = "2018-02-16T14:52:54Z";
    const expected = 'Fri Feb 16 2018';
    const results = cleanDate(rawDate);
    expect(results).toEqual(expected);
  });
});

describe('convertMetersToMiles', () => {
  it('should convert meters to miles', () => {
    const meters = 1610;
    const expected = `1 miles`;
    const results = convertMetersToMiles(meters);
    expect(results).toEqual(expected);
  });
});

describe('convertSecondsToHoursMins', () => {
  it('should convert seconds to hours/mins', () => {
    const seconds = 4800;
    const expected = '1 hr(s) 20 min(s)';
    const results = convertSecondsToHoursMins(seconds);
    expect(results).toEqual(expected);
  });
});

describe('rideCleaner', () => {
  it('should clean raw ride information', () => {
    const rawRides = [mocks.mockActivityAndTrail];
    const expected = mocks.mockRideCleanerReturn;
    const results = rideCleaner(rawRides);
    expect(results).toEqual(expected);
  });
});

