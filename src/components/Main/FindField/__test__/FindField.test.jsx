import FindField from "../FindField.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../../store/store.jsx";

it("FindField should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <FindField />
    </Provider>,
    div
  );
});
