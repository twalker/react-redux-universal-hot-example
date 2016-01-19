import React, {Component, PropTypes} from 'react';
import { TodoList, TodoForm } from 'components';
import {connect} from 'react-redux';

@connect(
  // why state?
  state => ({todos: state.todos})
)
export default class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array
  }

  state = {
    todos: []
  }

  render() {
    const {todos} = this.props;
    console.log('hello', this);
    return (
      <section className="container">
        <h1>TODOs</h1>
        <TodoList todos={todos}/>
        <TodoForm />
      </section>
    );
  }
}
