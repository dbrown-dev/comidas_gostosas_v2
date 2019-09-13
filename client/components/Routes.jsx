import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';

const Routes = () => (
  <>
    <Route path="/" component={Header} />
    <Switch>
      <Route path="/" component={Header} />
    </Switch>
  </>
);

export default Routes;
