export const SHOW_ERROR = 'SHOW_ERROR';

export const showError = errorMessage => Object.freeze({ type: SHOW_ERROR, errorMessage });
