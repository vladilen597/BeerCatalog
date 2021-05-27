import { connect } from "react-redux";
import BeerList from "../components/Main/BeerList/BeerList.jsx";
import { fetchBeers } from "../store/actions/fetchBeersAction.jsx";
import {
  addFavourite,
  removeFavourite,
} from "../store/actions/toggleFavourite.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    addFavourite: (id) => dispatch(addFavourite(id)),
    removeFavourite: (id) => dispatch(removeFavourite(id)),
  };
};

const BeerListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList);

export default BeerListConnected;
