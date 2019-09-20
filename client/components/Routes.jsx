import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import MultiSelect from './MultiSelect';

const Routes = () => (
  <>
    {/* <Route path="/" component={Header} /> */}
    <Switch>
      <Route path="/" exact component={MultiSelect} />
    </Switch>
  </>
);

export default Routes;
