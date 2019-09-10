const express = require('express');
const path = require('path');
const pino = require('express-pino-logger')();

const { getDBSelectAndResponse, getDBFullQueryAndResponse } = require('./routeFunctions');
const {
  read: { getRecipeSummaries, getFullRecipeDetailsById }
} = require('./db');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(pino);
server.use(express.static(path.join(__dirname, '../public')));

server.get('/api/cooktimes', getDBSelectAndResponse('cook_times'));
server.get('/api/categories', getDBSelectAndResponse('cuisine_categories'));
server.get('/api/seasons', getDBSelectAndResponse('seasons'));
server.get('/api/ingredients', getDBSelectAndResponse('ingredients'));
server.get('/api/measurements', getDBSelectAndResponse('measurements'));
server.get('/api/recipes', getDBFullQueryAndResponse(getRecipeSummaries));
server.get('/api/recipes/:id', getDBFullQueryAndResponse(getFullRecipeDetailsById));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = server;
