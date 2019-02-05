export const SEARCH_INPUT_CHANGE = "SEARCH_INPUT";

export const searchBooks = input => dispatch => {
  dispatch({ type: SEARCH_INPUT_CHANGE, payload: input });
};
