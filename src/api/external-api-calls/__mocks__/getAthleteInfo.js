import { mockUserInfo } from '../../../mock-data/mock-data';

const getAthleteInfo = jest.fn()
  .mockImplementation(() => {
    return Promise.resolve(
      mockUserInfo
    )
  });

export default getAthleteInfo;