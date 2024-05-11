import React, { Component } from "react";
class Akash extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "skyblue", margin: "30px" }}>
        <h1> {this.props.name}</h1>
        {this.props.changed && <h1>changed</h1>}
      </div>
    );
  }
}

export default Akash;
