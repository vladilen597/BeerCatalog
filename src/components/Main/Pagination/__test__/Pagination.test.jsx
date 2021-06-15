import Pagination from "../Pagination.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../../store/store.jsx";

it("Pagination should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Pagination />
    </Provider>,
    div
  );
});
