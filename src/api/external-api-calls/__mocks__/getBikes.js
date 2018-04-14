import { mockBikes } from '../../../mock-data/mock-data';

const getBikes = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockBikes);
});

export default getBikes;