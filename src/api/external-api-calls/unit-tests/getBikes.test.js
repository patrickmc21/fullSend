import getBikes from '../getBikes';
import { mockBikes } from '../../../mock-data/mock-data';

describe('getBikes', () => {

  let mockToken;
  let mockBikeId;

  beforeEach(() => {
    mockToken = 1111;
    mockBikeId = 1;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockBikes[0]);
        }
      });
    });
  });

  it('should call fetch with correct params', () => {
    const url = `https://www.strava.com/api/v3/gear/${mockBikeId}`;
    const optionsObject = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockToken}`
      }
    };
    const expected = [url, optionsObject];
    getBikes(mockBikeId, mockToken);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return a bike', async () => {
    const expected = mockBikes[0];
    const results = await getBikes(mockBikeId, mockToken);
    expect(results).toEqual(expected);
  });

  it('should throw error on failed fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      });
    });
    const expected = 'FAIL';
    const results = getBikes(mockBikeId, mockToken);
    expect(results).rejects.toEqual(expected);
  });
});