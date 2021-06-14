import BeerStats from "../BeerStats.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../../store/store.jsx";
import { testBeer } from "../../../../constants/dictionary/testBeer.jsx";

it("BeerStats should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BeerStats beer={testBeer} />
    </Provider>,
    div
  );
});
