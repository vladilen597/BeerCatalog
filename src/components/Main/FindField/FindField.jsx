import React, { Component } from "react";
import "./FindField.css";
import { searchIcon } from "../../../constants/resourses/pictures/picturesImport.jsx";

class FindField extends Component {
  state = { beerName: "" };

  handleChange = (event) => {
    this.setState({ beerName: event.target.value });
  };

  handleClick = (event) => {
    if (event.key === "Enter") {
      this.setState({ beerName: event.target.value });
      this.props.findBeer(this.state.beerName);
    }
  };

  render() {
    return (
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
          onClick={() => this.props.findBeer(this.state.beerName)}
        >
          <img className="find-beers-icon" src={searchIcon} />
        </button>
      </div>
    );
  }
}

export default FindField;
