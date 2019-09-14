import { SHOW_ERROR } from '../actions';

const initialState = { isError: false };

const error = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        isError: true,
        message: action.errorMessage
      };

    default:
      return state;
  }
};

export default error;
