import { mockUserStravaInfo } from '../../../mock-data/mock-data';


const getRiderStats = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockUserStravaInfo);
});

export default getRiderStats;