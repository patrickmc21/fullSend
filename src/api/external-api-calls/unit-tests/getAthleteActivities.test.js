import { getAthleteActivities } from '../getAthleteActivities';
import * as mock from '../../../mock-data/mock-data';

describe('getAthleteActivities', () => {

  let mockBefore;
  let mockAfter;
  let mockToken;
  let mockActivities;
  let rootUrl;
  let urlOptions;
  let url;
  let optionsObject;

  beforeEach(() => {
    mockActivities = mock.mockUserActivityLog;
    mockToken = 123;
    mockBefore = 111111;
    mockAfter = 222222;
    rootUrl = 'https://www.strava.com/api/v3/athlete/activities';
    urlOptions = `?before=${mockBefore}&after=${mockAfter}&page=1`;
    url = `${rootUrl}${urlOptions}`;
    optionsObject = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${mockToken}`,
        "Content-Type": 'application/json' 
      }
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockActivities);
        }
      });
    });
  });

  it('should call fetch with correct params', () => {
    const expected = [url, optionsObject];
    getAthleteActivities(mockToken, mockAfter, mockBefore);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return the athletes activities', async () => {
    const expected = mockActivities;
    const rslts = await getAthleteActivities(mockToken, mockAfter, mockBefore);
    expect(rslts).toEqual(expected);
  });

  it('should throw an error on bad call', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      });
    });

    const expected = 'FAIL';
    const results = getAthleteActivities(mockToken, mockAfter, mockBefore);
    expect(results).rejects.toEqual(expected);
  }); 
});