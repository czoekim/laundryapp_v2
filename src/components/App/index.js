import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Account from '../Account/';
import Main from '../main/Main2';
import Sutton from '../LaundryRoom/Sutton';
// import Contact from '../contact/index';
import PasswordForgetPage from '../PasswordForget';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={Main} />
      <Route exact path={ROUTES.SUTTON} component={Sutton} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.ACCOUNT} component={Account} />
    </div>
  </Router>
);

export default withAuthentication(App);
