import { REVIEW_MOCK_DATA } from "../../REVIEW_MOCK_DATA";

import {
  GET_REVIEWS_START,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE
} from "../actions/reviewListActions";

const initialState = {
  reviews: REVIEW_MOCK_DATA,
  isLoadingReviews: false,
  isAddingReview: false,
  error: ""
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_START:
      return {
        ...state,
        isLoadingReviews: true,
        error: ""
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        isLoadingReviews: false
      };
    case GET_REVIEWS_FAILURE:
      return {
        ...state,
        isLoadingReviews: false,
        error: action.payload
      };
    case ADD_REVIEW_START:
      return {
        ...state,
        isAddingReview: true,
        error: ""
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        isAddingReview: false
      };
    case ADD_REVIEW_FAILURE:
      return {
        ...state,
        isAddingReview: false,
        error: action.payload
      };
    default:
      return state;
  }
};
