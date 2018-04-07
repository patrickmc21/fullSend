const rideReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RIDES':
      return action.rides;
    case 'UPDATE_RIDES':
      return [...state, ...action.rides];
    default:
      return state;
  }
};

export default rideReducer;