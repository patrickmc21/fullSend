import todosReducer from './todosReducer';
import { addTodos } from '../Actions';
import { mockTodos } from '../mock-data/mock-data';

describe('todosReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const results = todosReducer(undefined, {});
    expect(results).toEqual(expected);
  });

  it('should add todos to state', () => {
    const expected = mockTodos;
    const results = todosReducer(undefined, addTodos(mockTodos));
    expect(results).toEqual(expected);
  });
});