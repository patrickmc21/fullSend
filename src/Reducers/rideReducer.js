const rideReducer = (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_RIDES':
    return [...action.rides, ...state];
  case 'UPDATE_SINGLE_RIDE':
    return state.map(ride => {
      if (ride.id === action.ride.id) {
        return action.ride;
      } else {
        return ride;
      }
    });
  case 'CLEAR_RIDES':
    return [];
  default:
    return state;
  }
};

export default rideReducer;