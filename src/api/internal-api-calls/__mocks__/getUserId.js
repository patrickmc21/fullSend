export const getUserId = jest.fn()
  .mockImplementation((user) => {
    if (user.email !== 'cool@msn.com') {
      return null
    } else {
      return {id: 1}
    }
  });