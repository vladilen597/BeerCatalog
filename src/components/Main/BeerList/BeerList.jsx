import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./BeerList.scss";

import beerListResources from "../../../constants/resources/beerListResources.jsx";
import routes from "../../../constants/resources/routes.jsx";

class BeerList extends Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  handleToggleFavouriteClick = (beer) => {
    if (
      this.props.state.favourites.filter((like) => like == beer.id).length === 0
    ) {
      this.props.addFavourite(beer.id);
    } else this.props.removeFavourite(beer.id);
  };

  render() {
    const { getId } = this.props;
    const { beers, loading, favourites } = this.props.state;
    return loading ? (
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

                  <button onClick={() => this.handleToggleFavouriteClick(item)}>
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
}

export default BeerList;

BeerList.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
