import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from '../main/Main2';
import Sutton from '../LaundryRoom/Sutton';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={Main} />
      <Route exact path={ROUTES.SUTTON} component={Sutton} />
    </div>
  </Router>
);

export default App;
