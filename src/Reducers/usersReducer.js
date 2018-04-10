const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER':
      return action.user;
    case 'LOGOUT_USER':
      return {};
    default:
    return state;
  }
};

export default usersReducer;