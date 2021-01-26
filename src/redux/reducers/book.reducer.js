import * as types from "../constants/book.constants";
import bookActions from "../actions/book.actions";

const initialState = {
  books: [],
  loading: false,
  readingList: [],
  selectedBook: null,
};

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: payload.data,
      };
    case types.GET_BOOKS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default bookReducer;
