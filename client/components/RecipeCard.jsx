import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, CardImg, CardTitle } from './styled_components';

const RecipeCard = ({ recipe }) => (
  <Card>
    <CardImg src={recipe.image} />
    <CardTitle>{recipe.title}</CardTitle>
    <CardContent>{recipe.season}</CardContent>
    <CardContent>{recipe.rating}</CardContent>
    <CardContent>{recipe.cookTime}</CardContent>
    <CardContent>{recipe.cuisineCategories}</CardContent>
  </Card>
);

RecipeCard.propTypes = {
  recipe: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    season: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    cookTime: PropTypes.string.isRequired,
    cuisineCategories: PropTypes.string.isRequired
  }).isRequired
};

export default RecipeCard;
