import getRiderStats from '../getRiderStats';
import * as mock from '../../../mock-data/mock-data';

describe('getRiderStats', () => {

  let mockId;
  let mockToken;
  let mockInfo;

  beforeEach(() => {
    mockId = 111;
    mockToken = 222;
    mockInfo = mock.mockUserStravaInfo;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockInfo);
        }
      });
    });
  });

  it('should call fetch with correct params', () => {
    const url = `https://www.strava.com/api/v3/athletes/${mockId}/stats`;
    const urlOptions = '?page=1&per_page=30';
    const endpoint = `${url}${urlOptions}`;
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${mockToken}`,
        'Content-Type': 'application/json'
      }
    };
    const expected = [endpoint, options];
    getRiderStats(mockId, mockToken);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return rider stats', async () => {
    const expected = mockInfo;
    const results = await getRiderStats(mockId, mockToken);
    expect(results).toEqual(expected);
  });

  it('should throw error on bad fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      });
    });
    const expected = 'FAIL';
    const results = getRiderStats(mockId, mockToken);
    expect(results).rejects.toEqual(expected);
  });
});