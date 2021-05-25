import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer.jsx";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
