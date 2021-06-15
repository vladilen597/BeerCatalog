import BeerBrewing from "../BeerBrewing.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../../store/store.jsx";
import { testBeer } from "../../../../constants/dictionary/testBeer.jsx";

it("BeerBrewing should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BeerBrewing beer={testBeer[0]} />
    </Provider>,
    div
  );
});
