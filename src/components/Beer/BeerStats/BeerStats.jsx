import React from "react";
import "./BeerStats.scss";

const BeerStats = ({ beer }) => {
  const getFoodPairing = () => {
    return beer.food_pairing.map((food, index) => {
      return (
        <li key={index} className="food-pairing__item">
          {food}
        </li>
      );
    });
  };

  return (
    <div>
      <section className="beer-stats">
        <div className="properties">
          <h3>Properties</h3>
          <div className="properties-block">
            <article className="properties-item">
              <section className="properties-name">
                ABV<div className="tooltip">i</div>
                <div className="tooltip-description">Alcohol by volume</div>
              </section>
              <div className="properties-count">{beer.abv}</div>
            </article>
            <article className="properties-item">
              <section className="properties-name">
                IBU<div className="tooltip">i</div>
                <div className="tooltip-description">
                  International bitterness units
                </div>
              </section>
              <div className="properties-count">{beer.ibu}</div>
            </article>
            <article className="properties-item">
              <section className="properties-name">
                EBC<div className="tooltip">i</div>
                <div className="tooltip-description">Color by EBC</div>
              </section>
              <div className="properties-count">{beer.ebc}</div>
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
    </div>
  );
};

export default BeerStats;
