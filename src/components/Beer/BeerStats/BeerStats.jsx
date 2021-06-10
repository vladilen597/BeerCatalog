import React from "react";
import beerStatsResources from "../../../constants/resources/beerStatsResources.jsx";
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
          <h3>{beerStatsResources.properties.name}</h3>
          <div className="properties-block">
            <article className="properties-item">
              <section className="properties-name">
                {beerStatsResources.properties.abv.abbreviation}
                <div className="tooltip">i</div>
                <div className="tooltip-description">
                  {beerStatsResources.properties.abv.fullName}
                </div>
              </section>
              <div className="properties-count">{beer.abv}</div>
            </article>
            <article className="properties-item">
              <section className="properties-name">
                {beerStatsResources.properties.ibu.abbreviation}
                <div className="tooltip">i</div>
                <div className="tooltip-description">
                  {beerStatsResources.properties.ibu.fullName}
                </div>
              </section>
              <div className="properties-count">{beer.ibu}</div>
            </article>
            <article className="properties-item">
              <section className="properties-name">
                {beerStatsResources.properties.ebc.abbreviation}
                <div className="tooltip">i</div>
                <div className="tooltip-description">
                  {beerStatsResources.properties.abv.fullName}
                </div>
              </section>
              <div className="properties-count">{beer.ebc}</div>
            </article>
          </div>
        </div>
        <div className="food-pairing">
          <h3>{beerStatsResources.foodPairing}</h3>
          <div className="food-pairing-block">
            <ul className="food-pairing-list">{getFoodPairing()}</ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeerStats;
