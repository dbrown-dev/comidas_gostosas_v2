const express = require('express');
const path = require('path');
const pino = require('express-pino-logger')();

const { DbSelectAndResponse } = require('./routeFunctions');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(pino);
server.use(express.static(path.join(__dirname, '../public')));

server.get('/api/cooktimes', DbSelectAndResponse('cook_times'));
server.get('/api/categories', DbSelectAndResponse('cuisine_categories'));
server.get('/api/seasons', DbSelectAndResponse('seasons'));
server.get('/api/ingredients', DbSelectAndResponse('ingredients'));
server.get('/api/measurements', DbSelectAndResponse('measurements'));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = server;
