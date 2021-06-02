import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";

class Pagination extends Component {
  state = { currentPage: 1 };

  saveCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

  decrementArrow = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
      this.props.fetchBeers(this.state.currentPage - 1);
    }
  };

  incrementArrow = () => {
    if (this.state.currentPage < 19) {
      this.setState({ currentPage: this.state.currentPage + 1 });
      this.props.fetchBeers(this.state.currentPage + 1);
    }
  };

  countArrayPages = () => {
    let tempPagesArray = [];
    for (let i = 2; i <= 19; i++) {
      tempPagesArray.push(i);
    }
    return tempPagesArray;
  };

  render() {
    let pagesArray = this.countArrayPages();
    const { currentPage } = this.state;
    const { fetchBeers } = this.props;
    return (
      <ul className="pagination-list">
        <li className="pagination-list-item">
          <button className="left-arrow" onClick={this.decrementArrow}>
            {"<"}
          </button>
        </li>
        <li className="pagination-list-item">
          <button
            onClick={() => {
              this.saveCurrentPage(1);
              fetchBeers(1);
            }}
            style={
              currentPage == 1
                ? { backgroundColor: "blue", color: "#fff" }
                : { backgroundColor: "#fff" }
            }
          >
            1
          </button>
        </li>
        {pagesArray.map((pageNumber) => {
          if (pageNumber > currentPage - 2 && pageNumber < currentPage + 3) {
            return (
              <li key={pageNumber} className="pagination-list-item">
                <button
                  onClick={() => {
                    this.saveCurrentPage(pageNumber);
                    fetchBeers(pageNumber);
                  }}
                  style={
                    currentPage == pageNumber
                      ? { backgroundColor: "blue", color: "#fff" }
                      : { backgroundColor: "#fff" }
                  }
                >
                  {pageNumber}
                </button>
              </li>
            );
          }
        })}

        <li className="pagination-list-item">
          <button className="right-arrow" onClick={this.incrementArrow}>
            {">"}
          </button>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
};

export default Pagination;
