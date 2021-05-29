import React from "react";
import "./SingleBeer.css";

const SingleBeer = ({ id, state, addFavourite, removeFavourite }) => {
  return (
    <div>
      {state.beers.map((item) => {
        if (item.id == id) {
          return (
            <main className="single-beer" key={item.id}>
              <section className="top-description">
                <div className="single-beer-description">
                  <h2>{item.name}</h2>
                  <p className="beer-tagline">{item.tagline}</p>
                  {state.favourites.filter((like) => {
                    return like === id;
                  }).length === 0 ? (
                    <button
                      onClick={() => {
                        if (
                          state.favourites.filter((like) => like == id)
                            .length === 0
                        ) {
                          addFavourite(id);
                        }
                      }}
                    >
                      ADD TO FAVOURITES
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        removeFavourite(id);
                      }}
                    >
                      REMOVE FROM FAVOURITES
                    </button>
                  )}
                  <p>{item.description}</p>
                </div>
                <img src={item.image_url} />
              </section>
              <section className="beer-stats">
                <div className="properties">
                  <h3>Properties</h3>
                  <div className="properties-block">
                    <article className="properties-item ABV">
                      <section className="properties-name">
                        ABV<div className="tooltip">i</div>
                        <div className="tooltip-description">
                          Alcohol by volume
                        </div>
                      </section>
                      <div className="properties-count">{item.abv}</div>
                    </article>
                    <article className="properties-item IBU">
                      <section className="properties-name">
                        IBU<div className="tooltip">i</div>
                        <div className="tooltip-description">
                          International bitterness units
                        </div>
                      </section>
                      <div className="properties-count">{item.ibu}</div>
                    </article>
                    <article className="properties-item EBC">
                      <section className="properties-name">
                        EBC<div className="tooltip">i</div>
                        <div className="tooltip-description">Color by EBC</div>
                      </section>
                      <div className="properties-count">{item.ebc}</div>
                    </article>
                  </div>
                </div>
                <div className="food-pairing">
                  <h3>Food Pairing</h3>
                  <div className="food-pairing-block">
                    <ul className="food-pairing-list">
                      {item.food_pairing.map((food, index) => {
                        return (
                          <li key={index} className="food-pairing__item">
                            {food}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <h3>Brewing</h3>
                <p className="brewers-tips">{item.brewers_tips}</p>
              </section>
              <section className="brewing">
                <article className="ingredients">
                  <h3>Ingredients</h3>
                  <ul className="ingredients-list">
                    <li className="ingredients-item">
                      <h4>Water</h4>
                      <p>
                        {item.boil_volume.value} {item.boil_volume.unit}
                      </p>
                    </li>
                    <li className="ingredients-item">
                      <h4>Malt</h4>
                      {item.ingredients.malt.map((item, index) => {
                        return (
                          <p key={index}>
                            "{item.name}" - {item.amount.value}{" "}
                            {item.amount.unit}
                          </p>
                        );
                      })}
                    </li>
                    <li className="ingredients-item">
                      <h4>Hops</h4>
                      {item.ingredients.hops.map((hop, index) => {
                        return (
                          <p key={index}>
                            "{hop.name}" - {hop.amount.value} {hop.amount.unit},
                            add at {hop.add}
                          </p>
                        );
                      })}
                    </li>
                    <li className="ingredients-item">
                      <h4>Yeast</h4>
                      <p>{item.ingredients.yeast}</p>
                    </li>
                  </ul>
                </article>
                <article className="method">
                  <h3>Method</h3>
                  <ul className="method-list">
                    <li className="method-list-item">
                      <h4>Mash</h4>
                      {item.method.mash_temp.map((temp, index) => {
                        let tempValue = "";
                        if (temp.temp.unit == "celsius") tempValue = "C";
                        else tempValue = "F";
                        return (
                          <p key={index}>
                            {temp.duration} minutes at {temp.temp.value}{" "}
                            {tempValue}
                          </p>
                        );
                      })}
                    </li>
                    <li className="method-list-item">
                      <h4>Fermentation</h4>
                      Perform at {item.method.fermentation.temp.value}{" "}
                      {item.method.fermentation.temp.unit == "celsius"
                        ? "C"
                        : "F"}
                    </li>
                    <li className="method-list-item">
                      <h4>Twist</h4>
                      {item.method.twist}
                    </li>
                  </ul>
                </article>
              </section>
            </main>
          );
        }
      })}
    </div>
  );
};

export default SingleBeer;
