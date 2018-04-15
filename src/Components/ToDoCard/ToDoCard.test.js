import React from 'react';
import { shallow } from 'enzyme';
import { mockTodos } from '../../mock-data/mock-data';
import ToDoCard from './ToDoCard';

describe('ToDoCard', () => {

  let mockToDo;
  let wrapper;

  beforeEach(() => {
    mockToDo = mockTodos[0];
    wrapper = shallow(<ToDoCard todo={mockToDo}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if no image present', () => {
    mockToDo = mockTodos[1];
    wrapper = shallow(<ToDoCard todo={mockToDo}/>);
    expect(wrapper).toMatchSnapshot();
  });
});