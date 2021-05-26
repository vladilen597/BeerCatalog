import React from "react";
import { connect } from "react-redux";
import SingleBeer from "../components/SingleBeer/SingleBeer.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const SingleBeerConnected = connect(mapStateToProps)(SingleBeer);

export default SingleBeerConnected;
