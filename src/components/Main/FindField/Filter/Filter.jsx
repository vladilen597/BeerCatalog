import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Filter.scss";
import filterResources from "../../../../constants/resources/filterResources.jsx";

const Filter = ({ filterBeers }) => {
  const [alcohol, setAlcohol] = useState(14);
  const [unit, setUnit] = useState(60);
  const [color, setColor] = useState(52);

  const handleAlcoholChange = (event) => {
    setAlcohol(event.target.value);
    filterBeers(alcohol, unit, color);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    filterBeers(alcohol, unit, color);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    filterBeers(alcohol, unit, color);
  };

  return (
    <section className="filter-block">
      <h3>{filterResources.filterTagline}</h3>
      <div className="filter-block-item">
        <h3>{filterResources.filterTagline}</h3>
        <div className="filter-block-input">
          <label from="alcohol-range">{alcohol}</label>
          <input
            type="range"
            min="2"
            max="14"
            step="0.1"
            onChange={handleAlcoholChange}
            name="alcohol-range"
          />
        </div>
      </div>
      <div className="filter-block-item">
        <h3>{filterResources.filterOptionUnits}</h3>
        <div className="filter-block-input">
          <label from="units-range">{unit}</label>
          <input
            type="range"
            min="0"
            max="120"
            step="20"
            onChange={handleUnitChange}
            name="units-range"
          />
        </div>
      </div>
      <div className="filter-block-item">
        <h3>{filterResources.filterOptionColor}</h3>
        <div className="filter-block-input">
          <label from="color-range">{color}</label>
          <input
            type="range"
            min="4"
            max="80"
            step="4"
            onChange={handleColorChange}
            name="color-range"
          />
        </div>
      </div>
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  filterBeers: PropTypes.func.isRequired,
};
