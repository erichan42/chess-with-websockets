import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./StartButton.css";

export default class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      port: 0,
      client: null,
    };
  }

  generateGame() {
    let randomCode = "59FQ92";
    return randomCode;
  }

  render() {
    return (
      <>
        <Link to={`/${this.generateGame()}`}>
          <div className="startbutton-object">
            <h1>Generate Game</h1>
          </div>
        </Link>
      </>
    );
  }
}
