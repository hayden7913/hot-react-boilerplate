import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    console.log('testing *****')
    return (
      <header className='header'>
          <h1> get ready anybody hit that fastready to party tongiht </h1>
          <TodoTextInput newTodo={true}
                         onSave={::this.handleSave}
                         placeholder='What shall be broken ?' />
      </header>
    );
  }
}