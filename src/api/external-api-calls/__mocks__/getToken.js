const getToken = jest.fn()
  .mockImplementation((token) => {
    if (token === 1) {
      return {
        access_token: 1,
        athlete: {
          name: 'Bob',
          email: 'cool@msn.com',
          password: 123
        }
      }
    } else {
      return {
        access_token: 2,
        athlete: {
          name: 'Time',
          email: 'lame@aol.com',
          password: 321
        }
      }
    }
  });

export default getToken;