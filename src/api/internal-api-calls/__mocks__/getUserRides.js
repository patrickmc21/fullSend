import { mockRides } from '../../../mock-data/mock-data';

const getUserRides = jest.fn()
  .mockImplementation(() => {
    return Promise.resolve(mockRides);
  });

export default getUserRides;