import React, { Component } from 'react';
import Login from './components/Login';
import Planets from './components/Planets';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.min.css';
// import {checkStatus} from '../auth'
const newHistory = createBrowserHistory();

export default class App extends Component {

  validateLogin = () => {
    debugger;
    return false;//checkStatus.setLoggedIn?<Main/>:<Redirect to='/'/>
  }

  render() {
    return (
      <Router history={newHistory}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/planets" component={Planets} />
        </Switch>
      </Router>
    );
  }
}
