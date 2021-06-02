import React from "react";
import BeerListConnect from "../../containers/BeerListContainer.jsx";
import FindFieldConnect from "../../containers/FindFieldContainer.jsx";
import PaginationConnect from "../../containers/PaginationContainer.jsx";

const Main = () => {
  return (
    <main>
      <FindFieldConnect />
      <BeerListConnect />
      <PaginationConnect />
    </main>
  );
};

export default Main;
