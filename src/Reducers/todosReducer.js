const todosReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TODOS':
    return [...state, ...action.todos];
  default:
    return state;
  }
};

export default todosReducer;