import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./FindField.scss";
import { searchIcon } from "../../../constants/pictures/picturesImport.jsx";
import { findBeerFetch } from "../../../store/actions/thunks/fetchBeersAction.jsx";
import FilterConnect from "../../../components/Main/FindField/Filter/Filter.jsx";

const FindField = React.memo(
  ({ findBeerFetch }) => {
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

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findBeer: (beerName) => {
      dispatch(findBeer(beerName));
    },
    findBeerFetch: (beerName) => {
      dispatch(findBeerFetch(beerName));
    },
  };
};

const FindFieldConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindField);

export default FindFieldConnect;

FindField.propTypes = {
  findBeerFetch: PropTypes.func.isRequired,
};
