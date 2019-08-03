import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App.css';

export default class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash.",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with the wife.",
        completed: true
      },
      {
        id: 3,
        title: "Meeting with the boss.",
        completed: false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  // delete todo
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}
