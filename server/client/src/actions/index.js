import axios from "axios";
import { FETCH_USER } from "./types";

// mark as async the function
// eslint-disable-next-line import/prefer-default-export
export const fetchUser = () => async dispatch => {
  // place 'await'in front of the axios func
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
