import BeerList from "../BeerList.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../../store/store.jsx";

it("BeerList should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BeerList />
    </Provider>,
    div
  );
});
