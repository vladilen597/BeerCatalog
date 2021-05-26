import React from "react";
import "./FavouriteBeer.css";

const FavouriteBeer = (props) => {
  console.log(props);

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
  console.log(arrayLiked);
  return (
    <div className="favourite-beers">
      <h2>Your favourite beers</h2>
      <ul>
        {arrayLiked.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FavouriteBeer;
