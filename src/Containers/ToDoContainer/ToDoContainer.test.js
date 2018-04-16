import React from 'react';
import { shallow } from 'enzyme';
import getTrailsById from '../../api/external-api-calls/getTrailsById';
import getTodoIds from '../../api/external-api-calls/getTodoIds';
jest.mock('../../api/external-api-calls/getTrailsById');
jest.mock('../../api/external-api-calls/getTodoIds');

import * as mock from '../../mock-data/mock-data';

import { 
  ToDoContainer, 
  mapStateToProps, 
  mapDispatchToProps } from './ToDoContainer';

describe('ToDoContainer', () => {

  let mockUser;
  let mockTodos;
  let mockAddTodos;
  let wrapper;

  beforeEach(() => {
    mockUser = mock.mockUser;
    mockTodos = mock.mockTodos;
    mockAddTodos = jest.fn();
    wrapper = shallow(
      <ToDoContainer
        user={mockUser}
        todos={mockTodos}
        addTodos={mockAddTodos} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getTodoIds on getToDoRides', () => {
    const expected = mockUser.email;
    wrapper.instance().getToDoRides(mockUser);
    expect(getTodoIds).toHaveBeenCalledWith(expected);
  });

  it('should call getTrailsById on getToDoRides', () => {
    wrapper.instance().getToDoRides(mockUser);
    expect(getTrailsById).toHaveBeenCalled();
  });

  it('should call return trails on getToDoRides', async () => {
    const expected = mockTodos;
    const results = await wrapper.instance().getToDoRides(mockUser);
    expect(results).toEqual(expected);
  });

  it('should call getToDoRides on componentDidMount', () => {
    mockTodos = [];
    wrapper = shallow(
      <ToDoContainer
        user={mockUser}
        todos={mockTodos}
        addTodos={mockAddTodos} />,
      {disableLifecycleMethods: true}
    );
    const expected = mockUser;
    const spy = jest.spyOn(wrapper.instance(), 'getToDoRides');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalledWith(expected);
  });

  it('should call addTodos on componentDidMount', async () => {
    mockTodos = [];
    wrapper = shallow(
      <ToDoContainer
        user={mockUser}
        todos={mockTodos}
        addTodos={mockAddTodos} />,
      {disableLifecycleMethods: true}
    );
    const expected = mock.mockTodos;
    await wrapper.instance().componentDidMount();
    expect(mockAddTodos).toHaveBeenCalledWith(expected);
  });

});

describe('mapStateToProps', () => {

  let user;
  let todos;
  let mockState;
  let mapped;

  beforeEach(() => {
    user = mock.mockUser;
    todos = mock.mockTodos;
    mockState = {user, todos};
    mapped = mapStateToProps(mockState);
  });

  it('shoud map user to state', () => {
    const expected = user;
    expect(mapped.user).toEqual(expected);
  });

  it('shoud map todos to state', () => {
    const expected = todos;
    expect(mapped.todos).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should map addTodos to props', () => {
    const mockDispatch = jest.fn();
    const todos = mock.mockTodos;
    const expected = {
      type: 'ADD_TODOS',
      todos
    };
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addTodos(todos);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

});