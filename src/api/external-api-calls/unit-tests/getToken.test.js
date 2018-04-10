import getToken from '../getToken';
import * as mock from '../../../mock-data/mock-data';
import { clientId, clientSecret } from '../../apiKeys/strava-keys';

describe('getToken', () => {

  let mockTempToken;
  let url;
  let options;
  let mockAthleteInfo;

  beforeEach(() => {
    mockTempToken = 123;
    mockAthleteInfo = mock.mockStravaUser;
    url = '/tokenexchange';
    options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify({
        token: mockTempToken,
        clientId: clientId,
        clientSecret: clientSecret
      })
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(JSON.stringify(mockAthleteInfo))
        }
      })
    });
  });

  it('should call fetch with correct params', () => {
    const expected = [url, options];
    getToken(mockTempToken);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return an athlete', async () => {
    const expected = mockAthleteInfo;
    const results = await getToken(mockTempToken);
    expect(results).toEqual(expected);
  });

  it('should throw an error on bad fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      })
    });
    const expected = 'FAIL';
    const results = getToken(mockTempToken);
    expect(results).rejects.toEqual(expected);
  })
});