import createUserId from '../createUserId';
import * as mock from '../../../mock-data/mock-data';

describe('createUserId', () => {

  let options;
  let url;
  let mockUser;
  let mockId;

  beforeEach(() => {
    mockUser = mock.mockNewUser;
    const { name, email, password } = mockUser;
    options = {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    url = 'fullsend/users';
    mockId = 1;
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => {
            return Promise.resolve(mockId);
          }
        });
      });
  });

  it('should call fetch with correct params', () => {
    const expected = [url, options];
    createUserId(mockUser);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return a users id', async () => {
    const expected = 1;
    const results = await createUserId(mockUser);
    expect(results).toEqual(expected);
  });

  it('should throw error on bad fetch', async () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject({
          ok: false,
          message: 'Oops'
        });
      });

    const expected = 'Oops';
    const results = createUserId(mockUser);
    expect(results).rejects.toEqual(expected);
  });
});