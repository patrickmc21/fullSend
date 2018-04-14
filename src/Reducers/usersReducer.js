const usersReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SIGN_IN_USER':
    return action.user;
  case 'ADD_USER_STRAVA':
    return {...state, ...action.stravaInfo};
  case 'LOGOUT_USER':
    return {};
  default:
    return state;
  }
};

export default usersReducer;