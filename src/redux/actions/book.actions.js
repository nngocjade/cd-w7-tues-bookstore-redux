import { toast } from "react-toastify";
import api from "../../apiService";
import * as types from "../constants/book.constants";

//middleware functions will be here

const bookActions = {
  getBooks: (pageNum, limit, query) => async (dispatch) => {
    dispatch({ type: types.GET_BOOKS_REQUEST, payload: null });
    try {
      let url = `/books?_page=${pageNum}&_limit=${limit}`;
      if (query) url += `&q={query}`;

      const res = await api.get(url); //with axios
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res });
    } catch (error) {
      toast.error(error.message); //popup notification
      dispatch({ type: types.GET_BOOKS_FAILURE, payload: error });
    }
  },
};
export default bookActions;
