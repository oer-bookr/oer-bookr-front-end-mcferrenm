import { bookData } from "../../MOCK_DATA";

import {
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from "../actions/bookListActions";

const initialState = {
  books: bookData,
  isLoadingBooks: false,
  error: ""
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_START:
      return {
        ...state,
        isLoadingBooks: true,
        error: ""
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isLoadingBooks: false
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        isLoadingBooks: false,
        error: action.payload
      };
    default:
      return state;
  }
};
