import React, { useState } from "react";
import PropTypes from "prop-types";
import "./FindField.scss";
import { searchIcon } from "../../../constants/pictures/picturesImport.jsx";
import FilterConnect from "../../../containers/FilterContainer.jsx";

let renderCount = 0;

const FindField = React.memo(
  ({ findBeerFetch }) => {
    console.warn("FindField render: " + ++renderCount);
    const [beerName, setBeerName] = useState("");

    const handleChange = (event) => {
      setBeerName(event.target.value);
    };

    const handlePress = (event) => {
      if (event.key === "Enter") {
        if (beerName != 0) {
          setBeerName(event.target.value);
          findBeerFetch(beerName);
        }
      }
    };

    const handleClick = () => {
      if (beerName != 0) {
        findBeerFetch(beerName);
      } else alert("Search field is blank!");
    };

    return (
      <section>
        <div className="find-beers-container">
          <input
            className="find-beers-input"
            type="text"
            placeholder="Search beers..."
            onChange={handleChange}
            onKeyUp={handlePress}
            value={beerName}
          />
          <button className="find-beers-button" onClick={handleClick}>
            <img className="find-beers-icon" src={searchIcon} />
          </button>
        </div>
        <FilterConnect />
      </section>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.state.filter === nextProps.state.filter) {
      return true;
    }
    return false;
  }
);

export default FindField;

FindField.propTypes = {
  findBeerFetch: PropTypes.func.isRequired,
};
