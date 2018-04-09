import { mockActivityAndTrail } from '../../../mock-data/mock-data';

export const getTrails = jest.fn()
  .mockImplementation(() => {
    return Promise.resolve(mockActivityAndTrail)
  });