import { connect } from "react-redux";
import BeerList from "../components/Main/BeerList/BeerList.jsx";
import fetchBeers from "../store/actions/fetchBeersAction.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
  };
};

const BeerListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList);

export default BeerListConnected;
