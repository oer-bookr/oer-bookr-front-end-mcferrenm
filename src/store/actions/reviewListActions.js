import axios from "axios";

const BASE_URL = "https://oer-bookr-api.herokuapp.com";
// const BASE_URL = `${process.env.REACT_APP_API_URL}`;

export const GET_REVIEWS_START = "GET_REVIEWS_START";
export const GET_REVIEWS_SUCCESS = "GET_REVIEWS_SUCCESS";
export const GET_REVIEWS_FAILURE = "GET_REVIEWS_FAILURE";

export const ADD_REVIEW_START = "ADD_REVIEW_START";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const DELETE_REVIEW_START = "DELETE_REVIEW_START";
export const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
export const DELETE_REVIEW_FAILURE = "DELETE_REVIEW_FAILURE";

export const UPDATE_REVIEW_START = "UPDATE_REVIEW_START";
export const UPDATE_REVIEW_SUCCESS = "UPDATE_REVIEW_SUCCESS";
export const UPDATE_REVIEW_FAILURE = "UPDATE_REVIEW_FAILURE";

export const getReviews = () => dispatch => {
  dispatch({ type: GET_REVIEWS_START });

  axios
    .get(`${BASE_URL}/reviews`)
    // .then(res => console.log(res))
    .then(res => dispatch({ type: GET_REVIEWS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_REVIEWS_FAILURE, payload: err }));
};
export const addReview = newReview => dispatch => {
  dispatch({ type: ADD_REVIEW_START });

  axios
    .post(`${BASE_URL}/reviews`, newReview)
    // .then(res => console.log(res));
    .then(res => {
      dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data });
      dispatch({ type: GET_REVIEWS_START });
      axios
        .get(`${BASE_URL}/reviews`)
        // .then(res => console.log(res))
        .then(res => dispatch({ type: GET_REVIEWS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_REVIEWS_FAILURE, payload: err }));
    })
    .catch(err => dispatch({ type: ADD_REVIEW_FAILURE, payload: err }));
};

export const updateReview = updatedReview => dispatch => {
  dispatch({ type: UPDATE_REVIEW_START });
  axios
    .put(`${BASE_URL}/reviews/${updateReview.id}`, updatedReview)
    // .then(res => console.log(res));
    .then(res => {
      dispatch({ type: UPDATE_REVIEW_SUCCESS, payload: res.data });
      dispatch({ type: GET_REVIEWS_START });
      axios
        .get(`${BASE_URL}/reviews`)
        // .then(res => console.log(res))
        .then(res => dispatch({ type: GET_REVIEWS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_REVIEWS_FAILURE, payload: err }));
    })
    .catch(err => dispatch({ type: UPDATE_REVIEW_FAILURE, payload: err }));
};

export const deleteReview = id => dispatch => {
  dispatch({ type: DELETE_REVIEW_START });
  axios
    .delete(`${BASE_URL}/reviews${id}`)
    // .then(res => console.log(res));
    .then(res => {
      dispatch({ type: DELETE_REVIEW_SUCCESS, payload: res.data });
      dispatch({ type: GET_REVIEWS_START });
      axios
        .get(`${BASE_URL}/reviews`)
        // .then(res => console.log(res))
        .then(res => dispatch({ type: GET_REVIEWS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_REVIEWS_FAILURE, payload: err }));
    })
    .catch(err => dispatch({ type: DELETE_REVIEW_FAILURE, payload: err }));
};
