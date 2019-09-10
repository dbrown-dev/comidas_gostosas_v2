const { curry } = require('ramda');
const knex = require('knex');
const config = require('./knexfile').development;

// Configure knex with database
const database = knex(config);

// Select all contents of a single table
const selectTable = curry(async (db, tableName) => db(tableName));
const selectTableProd = selectTable(database);

module.exports = {
  selectTableProd
};
