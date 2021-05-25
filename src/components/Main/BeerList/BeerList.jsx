import React, { Component } from "react";
import "./BeerList.css";

export class BeerList extends Component {
  state = {
    beers: [],
  };

  componentWillMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => this.setState({ beers: data }));
  }

  render() {
    console.log(this.state.beers);
    return (
      <ul className="beer-list">
        {this.state.beers.map((beer) => {
          return (
            <li key={beer.id} className="beer-list-item">
              <img src={beer.image_url} />
              {beer.name}
              {beer.tagline}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BeerList;
