import React from "react";
import PropTypes from "prop-types";
import "./SingleBeer.css";

const SingleBeer = ({ id, state, addFavourite, removeFavourite }) => {
  const getSingleBeer = () => {
    return state.beers.filter((beer) => {
      return beer.id === id;
    })[0];
  };

  const singleBeer = getSingleBeer();

  const toggleFavourite = () => {
    if (
      state.favourites.filter((like) => {
        return like === id;
      }).length === 0
    ) {
      return (
        <button
          onClick={() => {
            addFavourite(id);
          }}
        >
          ADD TO FAVOURITES
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            removeFavourite(id);
          }}
        >
          REMOVE FROM FAVOURITES
        </button>
      );
    }
  };

  const getFoodPairing = () => {
    return singleBeer.food_pairing.map((food, index) => {
      return (
        <li key={index} className="food-pairing__item">
          {food}
        </li>
      );
    });
  };

  const getIngredientsMalt = () => {
    return singleBeer.ingredients.malt.map((item, index) => {
      return (
        <p key={index}>
          "{item.name}" - {item.amount.value} {item.amount.unit}
        </p>
      );
    });
  };

  const getIngredientsHops = () => {
    return singleBeer.ingredients.hops.map((hop, index) => {
      return (
        <p key={index}>
          "{hop.name}" - {hop.amount.value} {hop.amount.unit}, add at {hop.add}
        </p>
      );
    });
  };

  const getMethodMash = () => {
    return singleBeer.method.mash_temp.map((temp, index) => {
      let tempValue = "";
      if (temp.temp.unit == "celsius") tempValue = "C";
      else tempValue = "F";
      return (
        <p key={index}>
          {temp.duration} minutes at {temp.temp.value} {tempValue}
        </p>
      );
    });
  };

  return (
    <div>
      <main className="single-beer" key={singleBeer.id}>
        <section className="top-description">
          <div className="single-beer-description">
            <h2>{singleBeer.name}</h2>
            <p className="beer-tagline">{singleBeer.tagline}</p>
            {toggleFavourite()}
            <p>{singleBeer.description}</p>
          </div>
          <img src={singleBeer.image_url} />
        </section>
        <section className="beer-stats">
          <div className="properties">
            <h3>Properties</h3>
            <div className="properties-block">
              <article className="properties-item">
                <section className="properties-name">
                  ABV<div className="tooltip">i</div>
                  <div className="tooltip-description">Alcohol by volume</div>
                </section>
                <div className="properties-count">{singleBeer.abv}</div>
              </article>
              <article className="properties-item">
                <section className="properties-name">
                  IBU<div className="tooltip">i</div>
                  <div className="tooltip-description">
                    International bitterness units
                  </div>
                </section>
                <div className="properties-count">{singleBeer.ibu}</div>
              </article>
              <article className="properties-item">
                <section className="properties-name">
                  EBC<div className="tooltip">i</div>
                  <div className="tooltip-description">Color by EBC</div>
                </section>
                <div className="properties-count">{singleBeer.ebc}</div>
              </article>
            </div>
          </div>
          <div className="food-pairing">
            <h3>Food Pairing</h3>
            <div className="food-pairing-block">
              <ul className="food-pairing-list">{getFoodPairing()}</ul>
            </div>
          </div>
        </section>
        <section>
          <h3>Brewing</h3>
          <p className="brewers-tips">{singleBeer.brewers_tips}</p>
        </section>
        <section className="brewing">
          <article className="ingredients">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              <li className="ingredients-item">
                <h4>Water</h4>
                <p>
                  {singleBeer.boil_volume.value} {singleBeer.boil_volume.unit}
                </p>
              </li>
              <li className="ingredients-item">
                <h4>Malt</h4>
                {getIngredientsMalt()}
              </li>
              <li className="ingredients-item">
                <h4>Hops</h4>
                {getIngredientsHops()}
              </li>
              <li className="ingredients-item">
                <h4>Yeast</h4>
                <p>{singleBeer.ingredients.yeast}</p>
              </li>
            </ul>
          </article>
          <article className="method">
            <h3>Method</h3>
            <ul className="method-list">
              <li className="method-list-item">
                <h4>Mash</h4>
                {getMethodMash()}
              </li>
              <li className="method-list-item">
                <h4>Fermentation</h4>
                Perform at {singleBeer.method.fermentation.temp.value}{" "}
                {singleBeer.method.fermentation.temp.unit == "celsius"
                  ? "C"
                  : "F"}
              </li>
              <li className="method-list-item">
                <h4>Twist</h4>
                {singleBeer.method.twist}
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
};

export default SingleBeer;

SingleBeer.propTypes = {
  id: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};
