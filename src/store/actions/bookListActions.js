import axios from "axios";

const BASE_URL = "https://oer-bookr-api.herokuapp.com";

export const GET_BOOKS_START = "GET_BOOKS_START";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const getBooks = () => dispatch => {
  // dispatch({ type: GET_BOOKS_START });
  // axios
  //   .get(`${BASE_URL}/books`)
  //   .then(res => dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data }))
  //   .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
};
