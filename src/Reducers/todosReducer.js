const todosReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODOS':
    return [...state, ...action.todos];
  case 'CLEAR_TODOS':
    return [];
  default:
    return state;
  }
};

export default todosReducer;