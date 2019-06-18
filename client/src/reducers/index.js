import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
//Component calls action, action does something and sends result to reducer, reducer returns state to component store
export default combineReducers({
  alert,
  auth
});
