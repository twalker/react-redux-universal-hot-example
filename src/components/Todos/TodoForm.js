import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from 'redux/modules/todos';

@connect(
    state => ({ info: state.todos}),
    dispatch => bindActionCreators({ addTodo }, dispatch))

export default class TodoForm extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    const input = this.refs.text;
    this.props.addTodo(input.value);
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        form
        <input ref='text'/>
        <button>Add</button>
      </form>
    );
  }
}
