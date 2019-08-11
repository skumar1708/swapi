import React, { Component } from 'react';
import Login from './components/Login';
import Planets from './components/Planets';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.min.css';
const newHistory = createBrowserHistory();

export default class App extends Component {

  render() {
    return (
      <Router history={newHistory}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route  path="/planets" component={Planets} />
        </Switch>
      </Router>
    );
  }
}
