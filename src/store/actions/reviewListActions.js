// import axios from "axios";

// const BASE_URL = "https://oer-bookr-api.herokuapp.com";

export const GET_REVIEWS_START = "GET_REVIEWS_START";
export const GET_REVIEWS_SUCCESS = "GET_REVIEWS_SUCCESS";
export const GET_REVIEWS_FAILURE = "GET_REVIEWS_FAILURE";

export const ADD_REVIEW_START = "ADD_REVIEW_START";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const getReviews = () => dispatch => {
  dispatch({ type: GET_REVIEWS_START });
  // axios
  //   .get(`${BASE_URL}/books`)
  //   .then(res => dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data }))
  //   .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
};
export const addReview = newReview => dispatch => {
  dispatch({ type: ADD_REVIEW_START });
  dispatch({ type: ADD_REVIEW_SUCCESS, payload: newReview });
  // axios
  //   .get(`${BASE_URL}/books`)
  //   .then(res => dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data }))
  //   .catch(err => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
};
