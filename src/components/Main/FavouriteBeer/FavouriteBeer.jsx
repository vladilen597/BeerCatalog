import React from "react";
import { Link } from "react-router-dom";
import "./FavouriteBeer.css";

const FavouriteBeer = (props) => {
  let arrayLiked = [];

  const getLiked = () => {
    for (let i = 0; i < props.state.beers.length; i++) {
      for (let j = 0; j < props.state.favourites.length; j++) {
        if (props.state.beers[i].id == props.state.favourites[j]) {
          arrayLiked.push(props.state.beers[i]);
        }
      }
    }
  };

  getLiked();
  return (
    <div className="favourite-beers">
      <h2>Your favourite beers</h2>
      <ul className="favourite-beers-list">
        {arrayLiked.map((item, index) => {
          return (
            <li key={index} className="favourite-beers-list-item">
              <div className="item">
                <div className="item-description">
                  <h3>{item.name}</h3>
                  <p className="item-tagline">{item.tagline}</p>
                  <p>{item.description}</p>
                </div>
                <div className="item-picture">
                  <img src={item.image_url} />
                </div>
              </div>
              <Link to={"/beers/" + item.id}>
                <button
                  onClick={() => {
                    props.getId(item.id);
                  }}
                >
                  OPEN
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavouriteBeer;
