import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { RecipesListContainer } from './styled_components';
import RecipeCard from './RecipeCard';
import { getRecipesList } from '../actions';

const RecipesList = ({ recipesList }) => {
  useEffect(() => {
    getRecipesList();
  }, []);

  return (
    <RecipesListContainer>
      {recipesList.isLoaded &&
        recipesList.data.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </RecipesListContainer>
  );
};

RecipesList.propTypes = {
  recipesList: PropTypes.exact({
    isLoaded: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

const mapStateToProps = ({ recipesList }) => ({ recipesList });

const mapDispatchToProps = dispatch => {
  return {
    getRecipesList: dispatch(getRecipesList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
