import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { reviewsReducer } from "./reviewsReducer";
import { searchReducer } from "./searchReducer";
import { loginReducer } from "./loginReducer";

export default combineReducers({
  booksReducer,
  reviewsReducer,
  searchReducer,
  loginReducer
});
