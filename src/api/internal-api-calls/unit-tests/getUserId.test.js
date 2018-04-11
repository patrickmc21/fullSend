import getUserId from '../getUserId';
import * as mock from '../../../mock-data/mock-data';

describe('getUserId', () => {

  let mockUser;
  let mockId;
  let mockOptions;
  let url;

  beforeEach(() => {
    mockUser = mock.mockReturnUser;
    const { email, password } = mockUser;
    mockId = 1;
    mockOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    url = 'fullsend/users/signin';
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve([mockId]);
        }
      });
    });
  });

  it('should call fetch with correct params', () => {
    const expected = [url, mockOptions];
    getUserId(mockUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return the user id on success', async () => {
    const expected = mockId;
    const results = await getUserId(mockUser);
    expect(results).toEqual(expected);
  });

  it('should return null if no id is found', async () => {
    const expected = null;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve([]);
        }
      });
    });
    const results = await getUserId(mockUser);
    expect(results).toEqual(expected);
  });
});