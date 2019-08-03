import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import './App.css';

export default class App extends Component {

  state = {
    todos: [
      {
        id: 0,
        title: "Take out the trash.",
        completed: false
      },
      {
        id: 1,
        title: "Dinner with the wife.",
        completed: true
      },
      {
        id: 2,
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

  // add todo
  addTodo = (title) => {
    const { todos } = this.state;
    const newTodo = { id: todos[todos.length - 1].id + 1, title }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}
