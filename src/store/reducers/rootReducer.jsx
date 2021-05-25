import { combineReducers } from "redux";
import displayBeersReducer from "./displayBeersReducer.jsx";

const rootReducer = combineReducers({
  displayBeersReducer,
});

export default rootReducer;
