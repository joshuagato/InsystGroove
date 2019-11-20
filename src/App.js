import React, { Component } from 'react';
import './App.css';


import User from './components/User/User';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ViewUsers from './components/ViewUsers/ViewUsers';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          
          <Route path="/user" exact component={User} />
          <Route path="/view-users" exact component={ViewUsers} />
          <Route path="/" exact component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
