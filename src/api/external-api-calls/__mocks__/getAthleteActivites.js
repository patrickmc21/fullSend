import { mockUserActivityLog } from '../../../mock-data/mock-data';

export const getAthleteActivities = jest.fn()
  .mockImplementation(() => {
    return Promise.resolve([
      mockUserActivityLog
    ])
  });