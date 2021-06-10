import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getId,
  removeFavourite,
} from "../../../store/actions/actionCreators/toggleFavourite.jsx";
import {
  getFavouriteBeersSelector,
  getBeersSelector,
} from "../../../selectors/favouritesSelector.jsx";
import "./FavouriteBeer.scss";

import favouriteBeerResources from "../../../constants/resources/favouriteBeerResources.jsx";
import beerListResources from "../../../constants/resources/beerListResources.jsx";
import routes from "../../../constants/resources/routes.jsx";

const FavouriteBeer = React.memo(
  ({ getId, removeFavourite, beers, favourites }) => {
    console.log(beers);

    const getLiked = useMemo(() => {
      let tempArray = [];
      for (let i = 0; i < beers.length; i++) {
        for (let j = 0; j < favourites.length; j++) {
          if (beers[i].id == favourites[j]) {
            tempArray.push(beers[i]);
          }
        }
      }
      return tempArray;
    }, [favourites]);

    const arrayLiked = getLiked;

    const [favouriteBeer, setFavouriteBeers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [beersPerPage, setBeersPerPage] = useState(5);

    useEffect(() => {
      setFavouriteBeers(arrayLiked);
    }, [favourites, beersPerPage]);

    const indexOfLastBeer = currentPage * beersPerPage;
    const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
    const currentBeers = favouriteBeer.slice(indexOfFirstBeer, indexOfLastBeer);

    const pages = Math.ceil(favouriteBeer.length / beersPerPage);

    const countPages = () => {
      let tempPagesArray = [];
      for (let i = 1; i <= pages; i++) {
        tempPagesArray.push(i);
      }
      return tempPagesArray;
    };

    const pagesArray = countPages();

    const handleRemoveFavourite = (id) => {
      getId(id);
      removeFavourite();
    };

    const handleChange = (event) => {
      setBeersPerPage(event.target.value);
    };

    return (
      <section className="favourite-beers">
        <h2>{favouriteBeerResources.favouriteTagline}</h2>
        <p>{favouriteBeerResources.beerPerPageDescription}</p>
        <select onChange={handleChange} className="select-beerPerPage">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
        <ul className="favourite-beers-list">
          {favourites.length === 0 ? (
            <h2>{favouriteBeerResources.noFavouriteBeersTagline}</h2>
          ) : (
            currentBeers.map((item, index) => {
              return (
                <li key={index} className="favourite-beers-list-item">
                  <article className="item">
                    <div className="item-description">
                      <h3>{item.name}</h3>
                      <p className="item-tagline">{item.tagline}</p>
                      <p>{item.description}</p>
                    </div>
                    <div className="item-picture">
                      <img src={item.image_url} />
                    </div>
                  </article>

                  <article className="buttons">
                    <Link
                      className="open-single-beer-link"
                      to={routes.beerList + item.id}
                    >
                      <div
                        className="open-single-beer"
                        onClick={() => {
                          getId(item.id);
                        }}
                      >
                        {beerListResources.openBeerLink}
                      </div>
                    </Link>
                    <div
                      className="remove-favourite"
                      onClick={() => handleRemoveFavourite(item.id)}
                    >
                      {beerListResources.removeFavourite}
                    </div>
                  </article>
                </li>
              );
            })
          )}
        </ul>
        {pagesArray.map((page) => {
          return (
            <button
              className="favourite-beer-page"
              onClick={() => {
                setCurrentPage(page);
              }}
              key={page}
              style={
                currentPage == page
                  ? { backgroundColor: "blue", color: "#fff" }
                  : { backgroundColor: "#fff", color: "#000" }
              }
            >
              {page}
            </button>
          );
        })}
      </section>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    beers: getBeersSelector(state),
    favourites: getFavouriteBeersSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavourite: (id) => dispatch(removeFavourite(id)),
    getId: (id) => dispatch(getId(id)),
  };
};

const FavouriteBeerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteBeer);

export default FavouriteBeerConnect;

FavouriteBeer.propTypes = {
  getId: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};
