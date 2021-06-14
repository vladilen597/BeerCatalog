import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./BeerList.scss";

import beerListResources from "../../../constants/resources/beerListResources.jsx";
import routes from "../../../constants/resources/routes.jsx";

import { fetchBeers } from "../../../store/actions/thunks/fetchBeersAction.jsx";
import {
  addFavourite,
  removeFavourite,
  getId,
} from "../../../store/actions/actionCreators/toggleFavourite.jsx";
import {
  getBeersSelector,
  getIsLoadingSelector,
} from "../../../selectors/beerListSelector.jsx";
import { getFavouriteBeersSelector } from "../../../selectors/favouritesSelector.jsx";

const BeerList = React.memo(
  ({
    fetchBeers,
    addFavourite,
    removeFavourite,
    getId,
    isLoading,
    beers,
    favourites,
  }) => {
    useEffect(() => {
      fetchBeers();
    }, []);

    console.log(favourites);

    const handleToggleFavouriteClick = (beer) => {
      getId(beer.id);
      if (favourites.filter((like) => like == beer.id).length === 0) {
        console.log(beer.id);
        addFavourite();
      } else removeFavourite();
    };

    return isLoading ? (
      <h1>{beerListResources.loading}</h1>
    ) : (
      <ul className="beer-list">
        {beers.map((item) => {
          return (
            <li key={item.id} className="beer-list-item">
              <img src={item.image_url} />
              <div className="beer-list-item-decription">
                <strong>{item.name}</strong>
                <p>{item.tagline}</p>
                <div className="beer-list-item-buttons">
                  <button onClick={() => getId(item.id)}>
                    <NavLink
                      className="beer-link"
                      to={routes.beerList + item.id}
                    >
                      {beerListResources.openBeerLink}
                    </NavLink>
                  </button>

                  <button onClick={() => handleToggleFavouriteClick(item)}>
                    {favourites.filter((like) => like == item.id).length === 0
                      ? beerListResources.addFavourite
                      : beerListResources.removeFavourite}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
);

BeerList.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: getIsLoadingSelector(state),
    beers: getBeersSelector(state),
    favourites: getFavouriteBeersSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    addFavourite: () => dispatch(addFavourite()),
    removeFavourite: () => dispatch(removeFavourite()),
    getId: (id) => dispatch(getId(id)),
  };
};

const BeerListConnect = connect(mapStateToProps, mapDispatchToProps)(BeerList);

export default BeerListConnect;
