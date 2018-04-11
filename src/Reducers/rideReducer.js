const rideReducer = (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_RIDES':
    return [...action.rides, ...state];
  case 'CLEAR_RIDES':
    return [];
  default:
    return state;
  }
};

export default rideReducer;