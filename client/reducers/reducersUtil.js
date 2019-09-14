const reducer = (req, res, initialState) => (state = initialState, action) => {
  switch (action.type) {
    case req:
      return {
        isLoaded: false
      };
    case res:
      return {
        isLoaded: true,
        data: action.data
      };
    default:
      return state;
  }
};

export default reducer;
