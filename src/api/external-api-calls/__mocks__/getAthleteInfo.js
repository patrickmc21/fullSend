import { mockUserInfo } from '../../../mock-data/mock-data';

const getAthletInfo = jest.fn()
  .mockImplementation(() => {
    return Promise.resolve(
      mockUserInfo
    )
  });

export default getAthletInfo;