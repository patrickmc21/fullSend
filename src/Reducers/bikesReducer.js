const bikesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_BIKES':
    return [...state, ...action.bikes];
  default:
    return state;
  }
};

export default bikesReducer;