import React from "react";
import { Link } from "react-router-dom";
import "./FavouriteBeer.css";

const FavouriteBeer = ({ getId, removeFavourite, state }) => {
  let arrayLiked = [];

  const getLiked = () => {
    for (let i = 0; i < state.beers.length; i++) {
      for (let j = 0; j < state.favourites.length; j++) {
        if (state.beers[i].id == state.favourites[j]) {
          arrayLiked.push(state.beers[i]);
        }
      }
    }
  };

  getLiked();
  return (
    <section className="favourite-beers">
      <h2>Your favourite beers</h2>
      <ul className="favourite-beers-list">
        {arrayLiked.map((item, index) => {
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
                  to={"/beers/" + item.id}
                >
                  <div
                    className="open-single-beer"
                    onClick={() => {
                      getId(item.id);
                    }}
                  >
                    OPEN
                  </div>
                </Link>
                <div
                  className="remove-favourite"
                  onClick={() => {
                    removeFavourite(item.id);
                  }}
                >
                  REMOVE FAVOURITE
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FavouriteBeer;
