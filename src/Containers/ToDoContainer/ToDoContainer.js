import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ToDoCard from '../../Components/ToDoCard/ToDoCard';

import getTrailsById from '../../api/external-api-calls/getTrailsById';
import getTodoIds from '../../api/external-api-calls/getTodoIds';

import * as actions from '../../Actions';

import './ToDoContainer.css';

export class ToDoContainer extends Component {
  async componentDidMount() {
    const { user, todos } = this.props;
    if (todos.length < 1 && user.name) {
      const todoRides = await this.getToDoRides(user);
      this.props.addTodos(todoRides);
    }
  }

  getToDoRides = async (user) => {
    const todoIds = await getTodoIds(user.email);
    const todoRides = await getTrailsById(todoIds);
    return todoRides.trails;
  }

  createToDoCards = () => {
    const { todos } = this.props;
    return todos.map(todo => {
      return <ToDoCard key={todo.id} todo={todo} />
    });
  }

  render() {
    const { todos } = this.props;
    const todoCards = this.createToDoCards();
    return (
      <section className='todo-container'>
        <div className='todo-card-container'>
          {todos.length >= 1 && todoCards}
            {todos.length < 1 && 
              <h6 className='none-found'>No Rides to Show!</h6>}
        </div>
      </section>
    )
  }
};

export const mapStateToProps = (state) => ({
  user: state.user,
  todos: state.todos
});

export const mapDispatchToProps = (dispatch) => ({
  addTodos: todos => dispatch(actions.addTodos(todos))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToDoContainer));