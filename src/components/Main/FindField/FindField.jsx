import React, { Component } from "react";
import "./FindField.css";
import { searchIcon } from "../../../constants/resourses/pictures/picturesImport.jsx";
import FilterConnected from "../../../containers/FilterContainer.jsx";

class FindField extends Component {
  state = { beerName: "" };

  handleChange = (event) => {
    this.setState({ beerName: event.target.value });
  };

  handleClick = (event) => {
    if (event.key === "Enter") {
      if (this.state.beerName != 0) {
        this.setState({ beerName: event.target.value });
        this.props.findBeerFetch(this.state.beerName);
      }
    }
  };

  render() {
    return (
      <section>
        <div className="find-beers-container">
          <input
            className="find-beers-input"
            type="text"
            placeholder="Search beers..."
            onChange={this.handleChange}
            onKeyUp={this.handleClick}
            value={this.state.value}
          />
          <button
            className="find-beers-button"
            onClick={() => {
              if (this.state.beerName != 0) {
                this.props.findBeerFetch(this.state.beerName);
              }
            }}
          >
            <img className="find-beers-icon" src={searchIcon} />
          </button>
        </div>
        <FilterConnected />
      </section>
    );
  }
}

export default FindField;
