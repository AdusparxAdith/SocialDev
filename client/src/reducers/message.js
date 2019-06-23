import { GET_MESSAGES, SEND_MESSAGE } from "../actions/types";

const initialState = {
  inbox: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MESSAGES:
      return { ...state, inbox: payload, loading: false };
    default:
      return state;
  }
}
