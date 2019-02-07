import axios from "axios";

const BASE_URL = "https://oer-bookr-api.herokuapp.com";
// const BASE_URL = `${process.env.REACT_APP_API_URL}`;/

export const GET_BOOKS_START = "GET_BOOKS_START";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const ADD_BOOK_START = "ADD_BOOK_START";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

export const DELETE_BOOK_START = "DELETE_BOOK_START";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_FAILURE = "DELETE_BOOK_FAILURE";

export const EDIT_BOOK_START = "EDIT_BOOK_START";
export const EDIT_BOOK_SUCCESS = "EDIT_BOOK_SUCCESS";

export const UPDATE_BOOK_START = "UPDATE_BOOK_START";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const UPDATE_BOOK_FAILURE = "UPDATE_BOOK_FAILURE";

const token = localStorage.getItem("jwt");
const requestOptions = {
  headers: {
    authorization: token
  }
};

export const getBooks = () => dispatch => {
  dispatch({ type: GET_BOOKS_START });
  axios
    .get(`${BASE_URL}/books`, requestOptions)
    .then(res => {
      dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
};

export const addBook = newBook => dispatch => {
  dispatch({ type: ADD_BOOK_START });
  axios
    .post(`${BASE_URL}/books`, newBook)
    // .then(res => console.log(res));
    .then(res => {
      dispatch({ type: ADD_BOOK_SUCCESS });
      dispatch({ type: GET_BOOKS_START });
      axios
        .get(`${BASE_URL}/books`, requestOptions)
        .then(res => {
          dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
    })
    .catch(err => dispatch({ type: ADD_BOOK_FAILURE, payload: err }));
};

export const editBook = id => dispatch => {
  dispatch({ type: EDIT_BOOK_START, payload: id });
};

export const updateBook = updatedBook => dispatch => {
  dispatch({ type: UPDATE_BOOK_START });
  axios
    .put(`${BASE_URL}/books/${updatedBook.id}`, updatedBook)
    // .then(res => console.log(res));
    .then(res => {
      dispatch({ type: UPDATE_BOOK_SUCCESS });
      dispatch({ type: EDIT_BOOK_SUCCESS });
      dispatch({ type: GET_BOOKS_START });
      axios
        .get(`${BASE_URL}/books`, requestOptions)
        .then(res => {
          dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
    })
    .catch(err => dispatch({ type: UPDATE_BOOK_FAILURE, payload: err }));
};

export const deleteBook = id => dispatch => {
  dispatch({ type: DELETE_BOOK_START });
  axios
    .delete(`${BASE_URL}/books/${id}`)
    // .then(res => console.log(res));
    .then(res => {
      dispatch({ type: DELETE_BOOK_SUCCESS, payload: res.data.id });
      dispatch({ type: GET_BOOKS_START });
      axios
        .get(`${BASE_URL}/books`, requestOptions)
        .then(res => {
          dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
    })
    .catch(err => dispatch({ type: DELETE_BOOK_FAILURE, payload: err }));
};
