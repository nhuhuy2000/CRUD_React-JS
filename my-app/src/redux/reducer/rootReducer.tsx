import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
const reducer = combineReducers({
  allUser: userReducer,
});
export default reducer;
