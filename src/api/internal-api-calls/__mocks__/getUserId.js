export const getUserId = jest.fn()
  .mockImplementation((user) => {
    if (user.email === 'lame@aol.com') {
      return null
    } else {
      return 1
    }
  });