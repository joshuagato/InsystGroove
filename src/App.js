import React, { Component } from 'react';
import './App.css';


import User from './components/User/User';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ViewUsers from './components/ViewUsers/ViewUsers';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      auth: false
    }
  }

  changeAuth = (value) => {
    this.setState({ auth: value });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          
          <Route path="/" exact render={(props) => <Login auth={this.changeAuth} {...props} />} />
          {this.state.auth === true ? <Route path="/user" exact render={(props) => <User auth={this.changeAuth} {...props} />} /> : <Redirect to='/' />};
          {this.state.auth === true ? <Route path="/view-users" exact component={ViewUsers} /> : <Redirect to='/' />};
          <Route component={NotFound} />

        </Switch>
      </div>
    );

  }
}

export default App;
