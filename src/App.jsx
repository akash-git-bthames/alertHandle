import logo from "./logo.svg";
import "./App.css";
import Akash from "./Akash.jsx";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Vishal",
      changed: false,
    };
  }
  handleClick = () => {
    this.setState({ name: " Akash", changed: true });
  };
  render() {
    return (
      <div className="aakash">
        <Akash name={this.state.name} />
        <button onClick={this.handleClick}>Update Name</button>
      </div>
    );
  }
}

export default App;
