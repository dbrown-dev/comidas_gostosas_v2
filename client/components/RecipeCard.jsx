import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, CardImg, CardTitle, Bold } from './styled_components';

const convertCuisineCategories = cuisineCategories => {
  return cuisineCategories.split('@').join(', ');
};

const RecipeCard = ({ recipe: { image, title, season, rating, cookTime, cuisineCategories } }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    <CardImg src={image} />
    <CardContent>
      <Bold>Season: </Bold>
      {season}
    </CardContent>
    <CardContent>
      <Bold>Rating: </Bold>
      {rating}
    </CardContent>
    <CardContent>
      <Bold>Cooking Time: </Bold>
      {cookTime}
    </CardContent>
    <CardContent>
      <Bold>Categories: </Bold>
      {convertCuisineCategories(cuisineCategories)}
    </CardContent>
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
