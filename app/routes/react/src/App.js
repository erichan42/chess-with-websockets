import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.css';

import { Home, Chess } from "./Views/index"

export default class App extends Component {
  render() {
    return (

      <Router>
        <div>
          
          <Switch>
            <Route>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/:code" component={Chess} />
              </Switch>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
