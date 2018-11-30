import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../main/Main2';
import Sutton from '../LaundryRoom/Sutton';
import Contact from '../contact/index';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Main />
      <hr />
      <Route exact path={ROUTES.LANDING} component={Main} />
      <Route exact path={ROUTES.SUTTON} component={Sutton} />
      <Route exact path={ROUTES.CONTACT} component={Contact} />
    </div>
  </Router>
);

export default withAuthentication(App);
