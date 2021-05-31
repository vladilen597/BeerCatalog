import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./BeerList.css";

class BeerList extends Component {
  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    const { beers, loading } = this.props.state;
    return loading ? (
      <h1>LOADING...</h1>
    ) : (
      <ul className="beer-list">
        {beers.map((item) => {
          return (
            <li key={item.id} className="beer-list-item">
              <img src={item.image_url} />
              <div className="beer-list-item-decription">
                <strong>{item.name}</strong>
                <p>{item.tagline}</p>
                <div className="beer-list-item-buttons">
                  <button onClick={() => this.props.getId(item.id)}>
                    <NavLink className="beer-link" to={"/beers/" + item.id}>
                      OPEN
                    </NavLink>
                  </button>

                  <button
                    onClick={() => {
                      if (
                        this.props.state.favourites.filter(
                          (like) => like == item.id
                        ).length === 0
                      ) {
                        this.props.addFavourite(item.id);
                      } else this.props.removeFavourite(item.id);
                    }}
                  >
                    {this.props.state.favourites.filter(
                      (like) => like == item.id
                    ).length === 0
                      ? "FAVOURITE"
                      : "REMOVE FAVOURITE"}
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

BeerList.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
  addFavourite: PropTypes.func.isRequired,
  removeFavourite: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
