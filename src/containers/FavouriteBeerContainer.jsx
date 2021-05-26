import { connect } from "react-redux";
import FavouriteBeer from "../components/Main/FavouriteBeer/FavouriteBeer.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const FavouriteBeerConnected = connect(mapStateToProps)(FavouriteBeer);

export default FavouriteBeerConnected;
