import getAthleteInfo from '../getAthleteInfo';
import * as mock from '../../../mock-data/mock-data';

describe('getAthleteInfo', () => {

  let url;
  let options;
  let mockToken;
  let mockAthlete;

  beforeEach(() => {
    mockToken = 1234;
    url = 'https://www.strava.com/api/v3/athlete';
    options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${mockToken}`,
        "Content-Type": 'application/json' 
      }
    };
    mockAthlete = mock.mockStravaUser;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockAthlete)
        }
      })
    });
  });

  it('should call fetch with correct params', () => {
    const expected = [url, options];
    getAthleteInfo(mockToken);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return athlete info', async () => {
    const expected = mockAthlete;
    const results = await getAthleteInfo(mockToken);
    expect(results).toEqual(expected);
  });

  it('should throw error on bad fetch', async () => {
    const expected = 'FAIL';
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      })
    });
    const results = getAthleteInfo(mockToken);
    expect(results).rejects.toEqual(expected);
  });

});