import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import RecipesList from './RecipesList';

const Routes = () => (
  <>
    <Route path="/" component={Header} />
    <Switch>
      <Route path="/" exact component={RecipesList} />
    </Switch>
  </>
);

export default Routes;
