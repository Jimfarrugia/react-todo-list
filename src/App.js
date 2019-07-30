import React, { Component } from 'react';
import Todos from './components/Todos';
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
        completed: false
      },
      {
        id: 3,
        title: "Meeting with the boss.",
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
