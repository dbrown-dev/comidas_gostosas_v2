const { curry } = require('ramda');

const {
  read: { selectTableProd }
} = require('./db');

// Error Message functions
const getDBErrorMessage = err => `Database Error: ${err.message}`;

// JSON response functions for then and catch
const sendJSONResponseValid = curry((res, values) => res.json(values));

const sendJSONResponseError = curry((errorCode, errorMessage, res, err) =>
  res.status(errorCode).send(errorMessage(err))
);

// Functions for specific http error codes
const returnInternalServerError = sendJSONResponseError('500', getDBErrorMessage);

// Route functions for express server promises with error handeling done here
const getDBSelectAndResponse = curry((tableName, req, res) => {
  selectTableProd(tableName)
    .then(sendJSONResponseValid(res))
    .catch(returnInternalServerError(res));
});

const getDBFullQueryAndResponse = curry((dbFunc, req, res) => {
  dbFunc(req.params.id ? Number(req.params.id) : null)
    .then(sendJSONResponseValid(res))
    .catch(returnInternalServerError(res));
});

module.exports = {
  getDBSelectAndResponse,
  getDBFullQueryAndResponse
};
