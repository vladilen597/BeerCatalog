import Beer from "../Beer.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../../store/store.jsx";
import { testBeer } from "../../../constants/dictionary/testBeer.jsx";

const testBeerArr = [testBeer];

it("Beer should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Beer id={1} beers={testBeerArr} />
    </Provider>,
    div
  );
});
