import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import "./Chess.css";

export default class Chess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerID: [],
      spectatorID: []
    }
  }

  setup() {
    let link = "";

    const code = { code: "59FQ92" };
    const url = "/api/game";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(code),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (code.code === result.code)
            this.setState({
              port: result.port,
            });
          else throw "Wrong code returned.";
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.error(error);
        }
      );
    return link;
  }

  render() {
    return (
      <>
        <div>
          <p>{window.location.href}</p>
        </div>
      </>
    );
  }
}
