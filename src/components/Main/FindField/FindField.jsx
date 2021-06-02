import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FindField.scss";
import { searchIcon } from "../../../constants/pictures/picturesImport.jsx";
import FilterConnect from "../../../containers/FilterContainer.jsx";

class FindField extends Component {
  state = { beerName: "" };

  handleChange = (event) => {
    this.setState({ beerName: event.target.value });
  };

  handlePress = (event) => {
    if (event.key === "Enter") {
      if (this.state.beerName != 0) {
        this.setState({ beerName: event.target.value });
        this.props.findBeerFetch(this.state.beerName);
      }
    }
  };

  handleClick = () => {
    if (this.state.beerName != 0) {
      this.props.findBeerFetch(this.state.beerName);
    } else alert("Search field is blank!");
  };

  render() {
    const { value } = this.state;
    return (
      <section>
        <div className="find-beers-container">
          <input
            className="find-beers-input"
            type="text"
            placeholder="Search beers..."
            onChange={this.handleChange}
            onKeyUp={this.handlePress}
            value={value}
          />
          <button className="find-beers-button" onClick={this.handleClick}>
            <img className="find-beers-icon" src={searchIcon} />
          </button>
        </div>
        <FilterConnect />
      </section>
    );
  }
}

export default FindField;

FindField.propTypes = {
  findBeerFetch: PropTypes.func.isRequired,
};
