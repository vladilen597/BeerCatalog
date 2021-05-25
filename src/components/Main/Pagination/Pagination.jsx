import React, { Component } from "react";
import "./Pagination.css";

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

  render() {
    let paginationArray = [];

    for (let i = 2; i <= 19; i++) {
      paginationArray.push(i);
    }

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
              this.props.fetchBeers(1);
            }}
            style={
              this.state.currentPage == 1
                ? { backgroundColor: "blue", color: "#fff" }
                : { backgroundColor: "#fff" }
            }
          >
            1
          </button>
        </li>
        {paginationArray.map((pageNumber) => {
          if (
            pageNumber > this.state.currentPage - 2 &&
            pageNumber < this.state.currentPage + 3
          ) {
            return (
              <li key={pageNumber} className="pagination-list-item">
                <button
                  onClick={() => {
                    this.saveCurrentPage(pageNumber);
                    this.props.fetchBeers(pageNumber);
                  }}
                  style={
                    this.state.currentPage == pageNumber
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

export default Pagination;
