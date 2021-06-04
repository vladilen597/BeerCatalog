import React from "react";
import BeerListConnect from "../../components/Main/BeerList/BeerList.jsx";
import FindFieldConnect from "../../components/Main/FindField/FindField.jsx";
import PaginationConnect from "../../components/Main/Pagination/Pagination.jsx";

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
