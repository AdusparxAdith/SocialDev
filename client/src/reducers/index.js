import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import message from "./message";
//Component calls action, action does something and sends result to reducer, reducer returns state to component store
export default combineReducers({
  alert,
  auth,
  profile,
  post,
  message
});
