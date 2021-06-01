import React from "react";
import BeerListConnect from "../../containers/BeerListContainer.jsx";
import FindFieldConnect from "../../containers/FindFieldContainer.jsx";
import PaginationConnect from "../../containers/PaginationContainer.jsx";

const Main = ({ getId }) => {
  return (
    <main>
      <FindFieldConnect />
      <BeerListConnect getId={getId} />
      <PaginationConnect />
    </main>
  );
};

export default Main;
