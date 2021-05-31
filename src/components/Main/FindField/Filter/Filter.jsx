import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Filter.css";

class Filter extends Component {
  state = { alcohol: 14, IBUnits: 60, color: 52 };

  handleAlcoholChange = (event) => {
    this.setState({ alcohol: event.target.value });
    this.props.filterBeers(
      this.state.alcohol,
      this.state.IBUnits,
      this.state.color
    );
  };

  handleUnitChange = (event) => {
    this.setState({ IBUnits: event.target.value });
    this.props.filterBeers(
      this.state.alcohol,
      this.state.IBUnits,
      this.state.color
    );
  };

  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
    this.props.filterBeers(
      this.state.alcohol,
      this.state.IBUnits,
      this.state.color
    );
  };

  render() {
    return (
      <section className="filter-block">
        <h3>Filter results</h3>
        <div className="filter-block-item">
          <h3>Alcohol by volume</h3>
          <div className="filter-block-input">
            <label from="alcohol-range">{this.state.alcohol}</label>
            <input
              type="range"
              min="2"
              max="14"
              step="0.1"
              onChange={this.handleAlcoholChange}
              name="alcohol-range"
            />
          </div>
        </div>
        <div className="filter-block-item">
          <h3>International bitterness units</h3>
          <div className="filter-block-input">
            <label from="units-range">{this.state.IBUnits}</label>
            <input
              type="range"
              min="0"
              max="120"
              step="20"
              onChange={this.handleUnitChange}
              name="units-range"
            />
          </div>
        </div>
        <div className="filter-block-item">
          <h3>Color by EBC</h3>
          <div className="filter-block-input">
            <label from="color-range">{this.state.color}</label>
            <input
              type="range"
              min="4"
              max="80"
              step="4"
              onChange={this.handleColorChange}
              name="color-range"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filterBeers: PropTypes.func.isRequired,
};
