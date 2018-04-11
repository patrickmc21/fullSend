/* eslint-disable max-len */

import { getTrails } from '../getTrails';
import key from '../../apiKeys/mtb-project-key.js';
import * as mock from '../../../mock-data/mock-data';

describe('getTrails', () => {

  let mockLat;
  let mockLong;
  let rootUrl;
  let urlOptions;
  let url;
  let mockTrails;

  beforeEach(() => {
    mockLat = 39;
    mockLong = 104;
    rootUrl = 'https://www.mtbproject.com/data/get-trails?';
    urlOptions = `lat=${mockLat}&lon=${mockLong}&maxDistance=0&sort=distance&key=${key}`;
    url = `${rootUrl}${urlOptions}`;
    mockTrails = mock.mockTrail;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockTrails);
        }
      });
    });
  });

  it('should call fetch with correct params', () => {
    const expected = url;
    getTrails(mockLat, mockLong);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a trail', async () => {
    const expected = mockTrails;
    const results = await getTrails(mockLat, mockLong);
    expect(results).toEqual(expected);
  });

  it('should throw an error on bad fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL' 
      });
    });
    const expected = 'FAIL';
    const results = getTrails(mockLat, mockLong);
    expect(results).rejects.toEqual(expected);
  });
});