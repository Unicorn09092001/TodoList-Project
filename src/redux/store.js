import { createStore, combineReducers } from "redux";
import loginReducer from "./login";

const reducer = combineReducers({
  login: loginReducer,
});

export default createStore(reducer);
