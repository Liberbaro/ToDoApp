import React, { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = { value: '' };

  onSubmitFormHandler = (e) => {
    e.preventDefault();
    const { value } = this.state;
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    this.props.addTaskToListToDo(value);
    this.setState({ value: '' });
  };

  onChangeInputHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmitFormHandler}>
        <input
          onChange={this.onChangeInputHandler}
          className="new-todo"
          type="text"
          placeholder="Input do wish"
          value={ value }
        />
      </form>
    );
  }
}
