import * as types from "../constants/favorite.constants";
import api from "../../apiService";

export const loadFavorites = () => async (dispatch) => {
  dispatch({ type: types.GET_FAVORITES_START });
  try {
    const response = await api.get("/favorites");
    dispatch({
      type: types.GET_FAVORITES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_FAVORITES_FAILURE,
      payload: error,
    });
  }
};

export const addToFavorites = (book) => async (dispatch) => {
  dispatch({ type: types.ADD_TO_FAVORITES_START });

  try {
    const response = await api.post("/favorites", book);
    dispatch({
      type: types.ADD_TO_FAVORITES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_TO_FAVORITES_FAILURE,
      payload: error,
    });
  }
};
