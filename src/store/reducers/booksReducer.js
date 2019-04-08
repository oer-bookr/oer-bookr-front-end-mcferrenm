import { bookData } from "../../MOCK_DATA";

import {
  GET_BOOKS_START,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  ADD_BOOK_START,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  UPDATE_BOOK_START,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
  EDIT_BOOK_START,
  EDIT_BOOK_SUCCESS,
  DELETE_BOOK_START,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILURE
} from "../actions/bookListActions";

const initialState = {
  books: bookData,
  isLoadingBooks: false,
  isAddingBook: false,
  isDeletingBook: false,
  isEditingBook: false,
  isUpdatingBook: false,
  editingId: false,
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
    case ADD_BOOK_START:
      return {
        ...state,
        isAddingBook: true,
        error: ""
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
        isAddingBook: false
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        isAddingBook: false,
        error: action.payload
      };
    case EDIT_BOOK_START:
      return {
        ...state,
        isEditingBook: true,
        editingId: action.payload,
        error: ""
      };
    case EDIT_BOOK_SUCCESS:
      return {
        ...state,
        isEditingBook: false
      };
    case UPDATE_BOOK_START:
      return {
        ...state,
        isUpdatingBook: true,
        error: ""
      };
    case UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        // books: action.payload,
        isUpdatingBook: false
      };
    case UPDATE_BOOK_FAILURE:
      return {
        ...state,
        isUpdatingBook: false,
        error: action.payload
      };
    case DELETE_BOOK_START:
      return {
        ...state,
        isDeletingBook: true,
        error: ""
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        // books: action.payload,
        isDeletingBook: false
      };
    case DELETE_BOOK_FAILURE:
      return {
        ...state,
        isDeletingBook: false,
        error: action.payload
      };
    default:
      return state;
  }
};
