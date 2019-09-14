import { requestAction, receiveAction, asyncAction } from './actionsUtil';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const REQUEST_RECIPES = 'REQUEST_RECIPES';

const receiveRecipes = receiveAction(RECEIVE_RECIPES);
const requestRecipes = requestAction(REQUEST_RECIPES);

export const getRecipesList = asyncAction(requestRecipes, receiveRecipes, 'recipes');
