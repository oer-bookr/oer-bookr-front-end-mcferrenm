import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { reviewsReducer } from "./reviewsReducer";
import { searchReducer } from "./searchReducer";

export default combineReducers({
  booksReducer,
  reviewsReducer,
  searchReducer
});
