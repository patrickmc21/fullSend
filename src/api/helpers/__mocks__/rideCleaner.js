import { mockRides } from '../../../mock-data/mock-data';

const rideCleaner = jest.fn()
  .mockImplementation(() => {
    return mockRides
  });

  export default rideCleaner;