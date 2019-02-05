import axios from "axios";

const BASE_URL = "https://oer-bookr-api.herokuapp.com";

export const GET_BOOKS_START = "GET_BOOKS_START";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const ADD_BOOK_START = "ADD_BOOK_START";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

export const getBooks = () => dispatch => {
  dispatch({ type: GET_BOOKS_START });
  axios
    .get(`${BASE_URL}/books`)
    .then(res => dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
};

export const addBook = newBook => dispatch => {
  dispatch({ type: ADD_BOOK_START });
  console.log(newBook);
  axios
    .post(`${BASE_URL}/books`, newBook)
    // .then(res => dispatch({ type: ADD_BOOK_SUCCESS, payload: res.data }))
    // .catch(err => dispatch({ type: ADD_BOOK_FAILURE, payload: err }));
    .then(res => console.log(res));
};
