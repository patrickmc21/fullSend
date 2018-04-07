export const addNewUser = (user) => ({
  type: 'ADD_NEW_USER',
  user
});

export const signInUser = (user) => ({
  type: 'SIGN_IN_USER',
  user
});

export const logoutUser = (id) => ({
  type: 'LOGOUT_USER',
  id
});