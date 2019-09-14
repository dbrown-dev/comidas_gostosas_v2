import { combineReducers } from 'redux';

import recipesList from './recipesList';
import error from './error';

export default combineReducers({
  error,
  recipesList
});
