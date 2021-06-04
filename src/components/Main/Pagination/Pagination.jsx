import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Pagination.scss";

import { fetchBeers } from "../../../store/actions/thunks/fetchBeersAction.jsx";

const Pagination = ({ fetchBeers }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const saveCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const decrementArrow = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
      fetchBeers(currentPage - 1);
    }
  };

  const incrementArrow = () => {
    if (currentPage < 19) {
      setCurrentPage((page) => page + 1);
      fetchBeers(currentPage + 1);
    }
  };

  const countArrayPages = () => {
    let tempPagesArray = [];
    for (let i = 2; i <= 19; i++) {
      tempPagesArray.push(i);
    }
    return tempPagesArray;
  };

  let pagesArray = countArrayPages();
  return (
    <ul className="pagination-list">
      <li className="pagination-list-item">
        <button className="left-arrow" onClick={decrementArrow}>
          {"<"}
        </button>
      </li>
      <li className="pagination-list-item">
        <button
          onClick={() => {
            saveCurrentPage(1);
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
                  saveCurrentPage(pageNumber);
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
        <button className="right-arrow" onClick={incrementArrow}>
          {">"}
        </button>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: (page) => dispatch(fetchBeers(page)),
  };
};

const PaginationConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);

export default PaginationConnect;

Pagination.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
};
