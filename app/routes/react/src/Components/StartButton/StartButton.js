import React, { Component } from "react";
import "./StartButton.css";

export default class StartButton extends Component {
  constructor(props) {
    super(props);
  }

  generateGame() {
    const url = "/api/game";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.error(error)
        }
      );
  }

  render() {
    return (
      <>
        <div className="startbutton-object" onClick={this.generateGame}>
          <h1>Generate Game</h1>
        </div>
      </>
    );
  }
}
