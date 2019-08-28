import React, { Component } from "react";

class Keypad extends Component {
  state = {};

  password = () => {
    console.log("Entering password...");
  };

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.password} />
      </div>
    );
  }
}

export default Keypad;
