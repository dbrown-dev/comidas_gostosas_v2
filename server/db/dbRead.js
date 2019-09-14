const { curry } = require('ramda');
const knex = require('knex');
const config = require('./knexfile').development;

// Configure knex with database
const database = knex(config);

// Select all contents of a single table
const selectTable = curry(async (db, tableName) => db(tableName));
const selectTableProd = selectTable(database);

// Joins to select all summary recipe data for one or more recipes
const getRecipeSummaries = (id, db = database) => {
  return db('recipes')
    .join('cook_times', 'recipes.cook_time_id', 'cook_times.id')
    .join('seasons', 'recipes.season_id', 'seasons.id')
    .join('cuisine_categories_recipes', 'recipes.id', 'cuisine_categories_recipes.recipe_id')
    .join('cuisine_categories', 'cuisine_categories.id', 'cuisine_categories_recipes.category_id')
    .select(
      'recipes.id',
      'recipes.title',
      'seasons.label as season',
      'recipes.rating',
      'recipes.image',
      'cook_times.label as cookTime',
      db.raw('GROUP_CONCAT(cuisine_categories.label, "@") cuisineCategories')
    )
    .orderBy('recipes.id')
    .groupBy('recipes.id')
    .modify(queryBuilder => {
      if (id) {
        queryBuilder.where('recipes.id', id);
        queryBuilder.first();
      }
    });
};

// Joins to select all instructions for a single recipe
const getRecipeInstructions = (id, db = database) => {
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.id', 'instructions.instruction', 'instructions.image')
    .orderBy('instructions.id')
    .where('recipes.id', id)
    .groupBy('instructions.id');
};

// Joins to select all ingredients for a single recipe
const getRecipeIngredients = (id, db = database) => {
  return db('ingredients')
    .join('ingredients_recipes', 'ingredients_recipes.ingredient_id', 'ingredients.id')
    .join('recipes', 'ingredients_recipes.recipe_id', 'recipes.id')
    .join('measurements', 'measurements.id', 'ingredients_recipes.measurement_id')
    .select(
      'ingredients.id',
      'ingredients.label as ingredient',
      'ingredients_recipes.quantity',
      'ingredients_recipes.ingredient_group as ingredientGroup',
      'measurements.label as measurement'
    )
    .orderBy('ingredients.id')
    .where('recipes.id', id);
};

const getFullRecipeDetailsById = (id, db = database) => {
  return getRecipeSummaries(id, db).then(summary => {
    return getRecipeInstructions(id, db).then(instructions => {
      return getRecipeIngredients(id, db).then(ingredients => {
        return Object.freeze({
          ...summary,
          instructions,
          ingredients
        });
      });
    });
  });
};

module.exports = {
  selectTableProd,
  getRecipeSummaries,
  getRecipeInstructions,
  getRecipeIngredients,
  getFullRecipeDetailsById
};
