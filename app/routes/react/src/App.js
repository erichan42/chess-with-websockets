import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.css';

import Home from './Views/Home/Home'

export default class App extends Component {
  render() {
    return (

      <Router>
        <div>
          
          <Home />
          <Switch>
            <Route>
              <Switch>
                <Route exact path="/">
                  <p>Home</p>
                </Route>
                <Route exact path="/page2">
                  <p>Page 2</p>
                </Route>
              </Switch>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
