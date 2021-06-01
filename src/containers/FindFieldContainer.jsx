import { connect } from "react-redux";
import FindField from "../components/Main/FindField/FindField.jsx";
import findBeer from "../store/actions/actionCreators/findBeerAction.jsx";
import { findBeerFetch } from "../store/actions/thunks/fetchBeersAction.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findBeer: (beerName) => {
      dispatch(findBeer(beerName));
    },
    findBeerFetch: (beerName) => {
      dispatch(findBeerFetch(beerName));
    },
  };
};

const FindFieldConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindField);

export default FindFieldConnect;
