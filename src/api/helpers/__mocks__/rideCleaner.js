import { mockRide } from '../../../mock-data/mock-data';

const rideCleaner = jest.fn()
  .mockImplementation(() => {
    return mockRide
  });

  export default rideCleaner;