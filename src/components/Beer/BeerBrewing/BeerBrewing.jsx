import React from "react";
import beerBrewingResources from "../../../constants/resources/beerBrewingResources.jsx";
import "./BeerBrewing.scss";

const BeerBrewing = React.memo(({ beer }) => {
  const getIngredientsMalt = () => {
    return beer.ingredients.malt.map((item, index) => {
      return (
        <p key={index}>
          "{item.name}" - {item.amount.value} {item.amount.unit}
        </p>
      );
    });
  };

  const getIngredientsHops = () => {
    return beer.ingredients.hops.map((hop, index) => {
      return (
        <p key={index}>
          "{hop.name}" - {hop.amount.value} {hop.amount.unit}, add at {hop.add}
        </p>
      );
    });
  };

  const getMethodMash = () => {
    return beer.method.mash_temp.map((temp, index) => {
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
      <section>
        <h3>{beerBrewingResources.brewing}</h3>
        <p className="brewers-tips">{beer.brewers_tips}</p>
      </section>
      <section className="brewing">
        <article className="ingredients">
          <h3>{beerBrewingResources.ingredients.name}</h3>
          <ul className="ingredients-list">
            <li className="ingredients-item">
              <h4>Water</h4>
              <p>
                {beer.boil_volume.value} {beer.boil_volume.unit}
              </p>
            </li>
            <li className="ingredients-item">
              <h4>{beerBrewingResources.ingredients.malt}</h4>
              {getIngredientsMalt()}
            </li>
            <li className="ingredients-item">
              <h4>{beerBrewingResources.ingredients.hop}</h4>
              {getIngredientsHops()}
            </li>
            <li className="ingredients-item">
              <h4>{beerBrewingResources.ingredients.yeast}</h4>
              <p>{beer.ingredients.yeast}</p>
            </li>
          </ul>
        </article>
        <article className="method">
          <h3>{beerBrewingResources.method.name}</h3>
          <ul className="method-list">
            <li className="method-list-item">
              <h4>{beerBrewingResources.method.mash}</h4>
              {getMethodMash()}
            </li>
            <li className="method-list-item">
              <h4>{beerBrewingResources.method.fermentation}</h4>
              Perform at {beer.method.fermentation.temp.value}{" "}
              {beer.method.fermentation.temp.unit == "celsius" ? "C" : "F"}
            </li>
            <li className="method-list-item">
              <h4>{beerBrewingResources.method.twist}</h4>
              {beer.method.twist}
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
});

export default BeerBrewing;
