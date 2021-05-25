import React from "react";
import BeerListConnected from "../../containers/BeerListContainer.jsx";
import FindFieldConnected from "../../containers/FindFieldContainer.jsx";
import PaginationConnected from "../../containers/PaginationContainer.jsx";

const Main = ({ getId }) => {
  return (
    <main>
      <FindFieldConnected />
      <BeerListConnected getId={getId} />
      <PaginationConnected />
    </main>
  );
};

export default Main;
