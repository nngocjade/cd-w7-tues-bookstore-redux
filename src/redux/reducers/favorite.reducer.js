import * as types from "../constants/favorite.constants";

const initialState = {
  books: [],
  loading: false,
  detailPageLoading: false,
  detailPageError: null,
  detailPageSuccess: null,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FAVORITES_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_FAVORITES_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };
    case types.ADD_TO_FAVORITES_START:
      return {
        ...state,
        detailPageLoading: true,
      };
    case types.ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        detailPageSuccess: `${action.payload.title}: Book added to favorites successfully`,
      };
    case types.ADD_TO_FAVORITES_FAILURE:
      return {
        ...state,
        detailPageError: action.payload.message,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
