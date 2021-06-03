import React from "react";
import PropTypes from "prop-types";
import "./Beer.scss";
import beerResources from "../../constants/resources/beerResources.jsx";
import BeerStats from "./BeerStats/BeerStats.jsx";
import BeerBrewing from "./BeerBrewing/BeerBrewing.jsx";

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

export default Beer;

Beer.propTypes = {
  state: PropTypes.object.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};
