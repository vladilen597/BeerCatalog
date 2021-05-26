import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BeerList.css";

class BeerList extends Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const { beers, error } = this.props.state;
    return this.props.state.loading ? (
      <h1>LOADING...</h1>
    ) : (
      <ul className="beer-list">
        {beers.map((item) => {
          return (
            <li key={item.id} className="beer-list-item">
              <img src={item.image_url} />
              <div className="beer-list-item-decription">
                {item.name}
                <p>{item.tagline}</p>
                <div className="beer-list-item-buttons">
                  <button onClick={() => this.props.getId(item.id)}>
                    <Link className="beer-link" to={"/beers/" + item.id}>
                      OPEN
                    </Link>
                  </button>
                  <button
                    onClick={() => {
                      if (
                        this.props.state.favourites.filter(
                          (like) => like == item.id
                        ).length === 0
                      ) {
                        this.props.addFavourite(item.id);
                      }
                    }}
                  >
                    FAVOURITE
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BeerList;
