import React from "react";
import "./BeerBrewing.scss";

const BeerBrewing = ({ beer }) => {
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
        <h3>Brewing</h3>
        <p className="brewers-tips">{beer.brewers_tips}</p>
      </section>
      <section className="brewing">
        <article className="ingredients">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            <li className="ingredients-item">
              <h4>Water</h4>
              <p>
                {beer.boil_volume.value} {beer.boil_volume.unit}
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
              <p>{beer.ingredients.yeast}</p>
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
              Perform at {beer.method.fermentation.temp.value}{" "}
              {beer.method.fermentation.temp.unit == "celsius" ? "C" : "F"}
            </li>
            <li className="method-list-item">
              <h4>Twist</h4>
              {beer.method.twist}
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default BeerBrewing;
