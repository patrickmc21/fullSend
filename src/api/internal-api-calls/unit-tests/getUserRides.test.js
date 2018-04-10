import getUserRides from '../getUserRides';
import * as mock from '../../../mock-data/mock-data';

describe('getUserRides', () => {

  let url;
  let options;
  let mockId;
  let mockRides;

  beforeEach(() => {
    mockId = 1;
    url = `fullsend/users/rides/${mockId}`;
    options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    mockRides = mock.mockRides;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockRides);
        }
      })
    });
  });

  it('should call fetch with correct params', () => {
    const expected = [url, options];
    getUserRides(mockId);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return a users rides', async () => {
    const expected = mockRides;
    const results = await getUserRides(mockId);
    expect(results).toEqual(expected);
  });

  it('should throw an error on bad fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 200,
        message: 'lame'
      })
    });
    const expected = { 
      message: 'Favorites not found!',
      error: 'lame'
    };
    const results = getUserRides(mockId);
    expect(results).rejects.toEqual(expected);
  });

});