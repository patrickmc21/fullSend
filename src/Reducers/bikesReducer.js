const bikesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_BIKES':
    return [...state, ...action.bikes];
  case 'CLEAR_BIKES':
    return [];
  default:
    return state;
  }
};

export default bikesReducer;