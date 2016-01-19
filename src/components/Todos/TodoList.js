import React, {Component, PropTypes} from 'react';

export default class TodoList extends Component {

  render() {
    const {todos} = this.props;
    return (
      <ul>
      {todos.map((todo) => {
        return <li key={`chat.msg.${todo.id}`}>{todo.text}</li>;
      })}
      </ul>
    );
  }
}
