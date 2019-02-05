import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { reviewsReducer } from "./reviewsReducer";

export default combineReducers({
  booksReducer,
  reviewsReducer
});
