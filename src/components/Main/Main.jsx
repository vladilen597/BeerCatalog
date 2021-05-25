import React from "react";
import BeerListConnected from "../../containers/BeerListContainer.jsx";
import FindFieldConnected from "../../containers/FindFieldContainer.jsx";
import FindField from "./FindField/FindField.jsx";

const Main = () => {
  return (
    <main>
      <FindFieldConnected />
      <BeerListConnected />
    </main>
  );
};

export default Main;
