import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';
// import UserManger from "./containers/UserManager/UserManger"

export default (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
    {/* <Route exact path="/user-manager" compoennt={UserManger} /> */}
  </Switch>
);
