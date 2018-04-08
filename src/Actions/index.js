export const signInUser = (user) => ({
  type: 'SIGN_IN_USER',
  user
});

export const logoutUser = (id) => ({
  type: 'LOGOUT_USER',
  id
});

export const addRides = (rides) => ({
  type: 'ADD_RIDES',
  rides
});

export const updateRides = (rides) => ({
  type: 'UPDATE_RIDES',
  rides
});