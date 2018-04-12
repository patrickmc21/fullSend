export const signInUser = (user) => ({
  type: 'SIGN_IN_USER',
  user
});

export const logoutUser = (id) => ({
  type: 'LOGOUT_USER',
  id
});

export const updateRides = (rides) => ({
  type: 'UPDATE_RIDES',
  rides
});

export const clearRides = (id) => ({
  type: 'CLEAR_RIDES',
  id
});

export const changeMonth = (month) => ({
  type: 'CHANGE_MONTH',
  month
});