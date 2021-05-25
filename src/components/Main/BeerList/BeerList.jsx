import React, { Component } from "react";
import "./BeerList.css";

class BeerList extends Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const { beers, error } = this.props.state;
    return this.props.state.loading ? (
      <h1>{error}</h1>
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
                  <button>OPEN</button>
                  <button>FAVOURITE</button>
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
