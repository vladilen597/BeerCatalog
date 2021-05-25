import { render } from "react-dom";
import React from "react";
import App from "./components/App.jsx";
import { Provider } from "react-redux";

import "./index.css";

import store from "./store/store.jsx";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
