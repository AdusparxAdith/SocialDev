import { GET_MESSAGES, SEND_MESSAGE, POST_ERROR } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get("api/message");

    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

export const sendMessage = (userId, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    await axios.post(`/api/message/${userId}`, formData, config);

    dispatch(setAlert("Message Sent", "success"));
  } catch (error) {
    dispatch(setAlert("Message Not Sent", "danger"));
  }
};
