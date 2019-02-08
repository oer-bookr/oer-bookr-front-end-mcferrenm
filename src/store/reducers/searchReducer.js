import { SEARCH_INPUT_CHANGE } from "../actions/searchActions";

const initialState = {
  searchInput: ""
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE:
      return {
        searchInput: action.payload
      };
    default:
      return state;
  }
};
