import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actions/recipesList';
import reducer from './reducersUtil';

const initialState = {
  isLoaded: false,
  data: null
};

export default reducer(REQUEST_RECIPES, RECEIVE_RECIPES, initialState);
