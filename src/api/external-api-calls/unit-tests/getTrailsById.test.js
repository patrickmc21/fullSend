import getTrailsById from '../getTrailsById';
import key from '../../apiKeys/mtb-project-key.js';
import * as mock from '../../../mock-data/mock-data';

describe('getTrailsById', () => {

  let mockIds;
  let mockTrails;

  beforeEach(() => {
    mockIds = mock.mockTodoIds;
    mockTrails = mock.mockTodos;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockTrails)
        }
      })
    });
  });

  it('should call fetch with correct params', () => {
    const mockIdsString = mockIds.toDos.join(',');
    const rootUrl = 'https://www.mtbproject.com/data/get-trails-by-id';
    const urlOptions = `?ids=${mockIdsString}&key=${key}`;
    const expected = `${rootUrl}${urlOptions}`;
    getTrailsById(mockIds);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return trails', async () => {
    const expected = mockTrails;
    const results = await getTrailsById(mockIds);
    expect(results).toEqual(expected);
  });

  it('should throw error on bad request', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      })
    });
    const expected = 'FAIL';
    const results = getTrailsById(mockIds);
    expect(results).rejects.toEqual(expected);
  });
});