const createUserId = jest.fn()
  .mockImplementation((user) => {
    if (user.name === 'Tim') {
      return {id: 1};
    } else {
      throw {message: 'Bad'};
    }
  });

export default createUserId;
