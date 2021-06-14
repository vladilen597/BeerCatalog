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
import { getBeersSelector } from "../../selectors/beerListSelector.jsx";
import { getFavouriteBeersSelector } from "../../selectors/favouritesSelector.jsx";

const Beer = React.memo(
  ({ beers, id, favourites, addFavourite, removeFavourite }) => {
    const getBeer = () => {
      return beers.filter((beer) => {
        return beer.id === id;
      })[0];
    };

    const beer = getBeer();

    const toggleFavourite = () => {
      if (
        favourites.filter((like) => {
          return like === id;
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
  }
);

const mapStateToProps = (state) => {
  return {
    favourites: getFavouriteBeersSelector(state),
    beers: getBeersSelector(state),
    id: state.beersReducer.get("id"),
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
  id: PropTypes.number.isRequired,
  beers: PropTypes.array.isRequired,
  favourites: PropTypes.array.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};
