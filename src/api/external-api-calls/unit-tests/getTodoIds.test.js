import getTodoIds from '../getTodoIds';
import key from '../../apiKeys/mtb-project-key.js';
import * as mock from '../../../mock-data/mock-data';

describe('getTodoIds', () => {

  let mockEmail;
  let mockTodos;

  beforeEach(() => {
    mockEmail = 'pat@askjeeves.com';
    mockTodos = mock.mockTodoIds;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockTodos);
        }
      });
    });
  });

  it('should call fetch with correct params', () => {
    const rootUrl = 'https://www.mtbproject.com/data/get-to-dos';
    const urlOptions = `?email=${mockEmail}&key=${key}`;
    const expected = `${rootUrl}${urlOptions}`;
    getTodoIds(mockEmail);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an array of ids', async () => {
    const expected = mockTodos;
    const results = await getTodoIds(mockEmail);
    expect(results).toEqual(expected);
  });

  it('should throw error on bad request', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      });
    });
    const expected = 'FAIL';
    const results = getTodoIds(mockEmail);
    expect(results).rejects.toEqual(expected);
  });
});