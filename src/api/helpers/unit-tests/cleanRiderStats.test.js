import cleanRiderStats from '../cleanRiderStats';
import * as mock from '../../../mock-data/mock-data';

describe('cleanRiderStats', () => {
  it('should take in raw user stats and clean them', () => {
    const rawData = mock.mockUserStravaInfo;
    const expected = mock.cleanStravaInfo;
    const results = cleanRiderStats(rawData);
    expect(results).toEqual(expected);
  });
});