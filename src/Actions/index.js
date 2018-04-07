export const signInUser = (user) => ({
  type: 'SIGN_IN_USER',
  user
});

export const logoutUser = (id) => ({
  type: 'LOGOUT_USER',
  id
});