import { combineReducers } from "redux";
import beersReducer from "./beersReducer.jsx";

const rootReducer = combineReducers({
  beersReducer,
});

export default rootReducer;
