import axios from "axios";

// const BASE_URL = "https://oer-bookr-api.herokuapp.com";
const BASE_URL = `${process.env.REACT_APP_API_URL}`;

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const loginUser = loginInput => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  axios
    .post(`${BASE_URL}/login`, loginInput)
    // .then(res => console.log(res));
    .then(res => {
      dispatch({ type: LOGIN_USER_SUCCESS });
      localStorage.setItem("jwt", res.data.token);
    })
    .catch(err => {
      dispatch({ type: LOGIN_USER_FAILURE, payload: err });
    });
};

export const logoutUser = id => dispatch => {
  dispatch({ type: LOGIN_USER_START });
  axios.post(`${BASE_URL}/login/${id}`).then(res => console.log(res));
  // .then(res => dispatch({type: LOGOUT_USER_SUCCESS, payload: res.data}))
  // .catch(err => dispatch({type: LOGOUT_USER_FAILURE, payload: err}))
};

export const addNewUser = newUserInput => dispatch => {
  dispatch({ type: CREATE_USER_START });
  axios.post(`${BASE_URL}/newuser`, newUserInput).then(res => console.log(res));
  // .then(res => dispatch({type: CREATE_USER_SUCCESS, payload: res.data}))
  // .catch(err => dispatch({type: CREATE_USER_FAILURE, payload: err}))
};
