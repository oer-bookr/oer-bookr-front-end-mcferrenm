import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../actions/loginActions";

const initialState = {
  isLoggingIn: false,
  error: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};
