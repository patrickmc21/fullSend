import { mockTodos } from '../../../mock-data/mock-data';

const getTrailsById = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    trails: mockTodos
  })
});

export default getTrailsById;