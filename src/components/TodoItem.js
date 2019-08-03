import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class TodoItem extends Component {

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
          &nbsp;
          {title}
          &nbsp;
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>&nbsp;x&nbsp;</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: "#FF0000",
  color: "#FFF",
  border: "none",
  padding: "4px 6px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
}
