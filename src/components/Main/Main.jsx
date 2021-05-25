import React from "react";
import BeerList from "./BeerList/BeerList.jsx";
import FindField from "./FindField/FindField.jsx";

const Main = () => {
  return (
    <main>
      <FindField />
      <BeerList />
    </main>
  );
};

export default Main;
