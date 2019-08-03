import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/" style={linkStyle}>Home</Link>&nbsp; | &nbsp;
      <Link to="/about" style={linkStyle}>About</Link>
    </header>
  )
}

const headerStyle = {
  background: "#333",
  color: "#FFF",
  textAlign: "center",
  padding: "10px"
}

const linkStyle = {
  color: "#FFF",
  textDecoration: "none"
}