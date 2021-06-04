import React from "react";
import PropTypes from "prop-types";
import beerResources from "../../constants/resources/beerResources.jsx";
import BeerStats from "./BeerStats/BeerStats.jsx";
import BeerBrewing from "./BeerBrewing/BeerBrewing.jsx";
import { connect } from "react-redux";
import {
  addFavourite,
  removeFavourite,
  getId,
} from "../../store/actions/actionCreators/toggleFavourite.jsx";

import "./Beer.scss";

const Beer = ({ state, addFavourite, removeFavourite }) => {
  const getBeer = () => {
    return state.beers.filter((beer) => {
      return beer.id === state.id;
    })[0];
  };

  const beer = getBeer();

  const toggleFavourite = () => {
    if (
      state.favourites.filter((like) => {
        return like === state.id;
      }).length === 0
    ) {
      return (
        <button onClick={addFavourite}>{beerResources.addFavourite}</button>
      );
    } else {
      return (
        <button onClick={removeFavourite}>
          {beerResources.removeFavourite}
        </button>
      );
    }
  };

  return (
    <main className="single-beer" key={beer.id}>
      <section className="top-description">
        <div className="single-beer-description">
          <h2>{beer.name}</h2>
          <p className="beer-tagline">{beer.tagline}</p>
          {toggleFavourite()}
          <p>{beer.description}</p>
        </div>
        <img src={beer.image_url} />
      </section>
      <BeerStats beer={beer} />
      <BeerBrewing beer={beer} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: () => dispatch(addFavourite()),
    removeFavourite: () => dispatch(removeFavourite()),
    getId: (id) => dispatch(getId(id)),
  };
};

const BeerConnect = connect(mapStateToProps, mapDispatchToProps)(Beer);

export default BeerConnect;
Beer.propTypes = {
  state: PropTypes.object.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};
