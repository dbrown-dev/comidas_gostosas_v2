import { showError } from './showError';
import { makeAPICall } from './api';

export const requestAction = type => Object.freeze({ type });

export const receiveAction = type => data => Object.freeze({ type, data });

export const asyncAction = (req, res, endPoint) => () => dispatch => {
  // Dispatches request notification to redux store
  dispatch(req);
  // Makes API call to endpoint and dispatches data or error to redux store
  return makeAPICall(endPoint)
    .then(({ body }) => {
      dispatch(res(body));
    })
    .catch(error => {
      dispatch(showError(error.message));
    });
};
