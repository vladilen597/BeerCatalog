import { connect } from "react-redux";
import BeerList from "../components/Main/BeerList/BeerList.jsx";
import { fetchBeers } from "../store/actions/thunks/fetchBeersAction.jsx";
import {
  addFavourite,
  removeFavourite,
  getId,
} from "../store/actions/actionCreators/toggleFavourite.jsx";

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
    getId: (id) => dispatch(getId(id)),
  };
};

const BeerListConnect = connect(mapStateToProps, mapDispatchToProps)(BeerList);

export default BeerListConnect;
