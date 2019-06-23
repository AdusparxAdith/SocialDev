import { GET_MESSAGES, SEND_MESSAGE } from "./types";
import Axios from "axios";
//component -> action -> reducer -> component
export const getMessages = () => async dispatch => {
  const res = await Axios.get("api/message");

  dispatch({
    type: GET_MESSAGES,
    payload: res.data
  });
};
