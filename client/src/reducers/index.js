import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import guestHouseReducer from "./guestHouseReducer";

export default combineReducers({
  auth: authReducer,
  guestHouse: guestHouseReducer,
  errors: errorReducer
});
