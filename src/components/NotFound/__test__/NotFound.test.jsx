import NotFound from "../NotFound.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../store/store.jsx";
import { BrowserRouter as Router } from "react-router-dom";

it("NotFound should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <NotFound />
      </Router>
    </Provider>,
    div
  );
});
