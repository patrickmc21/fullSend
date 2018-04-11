/* eslint-disable camelcase */

const getToken = jest.fn()
  .mockImplementation((token) => {
    if (token === 1) {
      return {
        access_token: 1,
        athlete: {
          firstname: 'Bob',
          email: 'cool@msn.com',
          id: 123
        }
      };
    } else if (token === 2) {
      return {
        access_token: 2,
        athlete: {
          firstname: 'Tim',
          email: 'lame@aol.com',
          id: 321
        }
      };
    } else {
      return {
        access_token: 2,
        athlete: {
          firstname: 'Al',
          email: 'whatevs@aol.com',
          id: 321
        }
      };
    }
  });

export default getToken;