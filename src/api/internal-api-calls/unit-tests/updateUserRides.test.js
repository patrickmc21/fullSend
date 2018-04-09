import updateUserRides from '../updateUserRides';
import * as mock from '../../../mock-data/mock-data';

describe('updateUserRides', () => {

  let url;
  let options;
  let body;
  let mockRide;
  let mockId;

  beforeEach(() => {
    url = '/fullsend/users/rides';
    mockRide = mock.mockRide;
    mockId = 1;
    body = Object.assign(mockRide, {userId: mockId});
    options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(mockId);
        }
      })
    });
  });

  it('should call fetch with the correct params', () => {
    const expected = [url, options];
    updateUserRides(mockRide, mockId);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return the ride id', async () => {
    const expected = 1;
    const results = await updateUserRides(mockRide, mockId);
    expect(results).toEqual(expected);
  });

  it('should return an error on bad post', async () => {
    const expected = {
      error: 'BAD', 
      message: 'Error adding ride'
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'BAD'
      })
    });
    const results = updateUserRides(mockRide, mockId);
    expect(results).rejects.toEqual(expected);
  });

});