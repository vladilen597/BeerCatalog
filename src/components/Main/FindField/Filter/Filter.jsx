import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Filter.scss";
import filterResources from "../../../../constants/resources/filterResources.jsx";

import { filterBeers } from "../../../../store/actions/thunks/fetchBeersAction.jsx";

const Filter = React.memo(
  ({ filterBeers }) => {
    const [alcohol, setAlcohol] = useState(14);
    const [unit, setUnit] = useState(60);
    const [color, setColor] = useState(52);

    const handleAlcoholChange = (event) => {
      setAlcohol(event.target.value);
    };

    const fetchAlcohol = (event) => {
      filterBeers(event.target.value, unit, color);
    };

    const handleUnitChange = (event) => {
      setUnit(event.target.value);
    };

    const fetchUnit = (event) => {
      filterBeers(alcohol, event.target.value, color);
    };

    const handleColorChange = (event) => {
      setColor(event.target.value);
    };

    const fetchColor = (event) => {
      filterBeers(alcohol, unit, event.target.value);
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
              onMouseUp={fetchAlcohol}
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
              onMouseUp={fetchUnit}
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
              onMouseUp={fetchColor}
              name="color-range"
            />
          </div>
        </div>
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

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterBeers: (alcohol, unit, color) =>
      dispatch(filterBeers(alcohol, unit, color)),
  };
};

const FilterConnect = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterConnect;

Filter.propTypes = {
  filterBeers: PropTypes.func.isRequired,
};
