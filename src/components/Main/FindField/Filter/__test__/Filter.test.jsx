import FilterConnect from "../Filter.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../../../store/store.jsx";

it("Filter should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <FilterConnect />
    </Provider>,
    div
  );
});
