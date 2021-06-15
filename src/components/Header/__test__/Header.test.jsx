import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header.jsx";
import { Provider } from "react-redux";
import store from "../../../store/store.jsx";

it("Header should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Header />
    </Provider>,
    div
  );
});
