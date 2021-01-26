import { combineReducers } from "redux";
import bookReducer from "./book.reducer";
import favoriteReducer from "./favorite.reducer";

export default combineReducers({
  book: bookReducer,
  favorite: favoriteReducer,
});
