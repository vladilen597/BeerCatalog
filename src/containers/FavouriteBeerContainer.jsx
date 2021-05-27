import { connect } from "react-redux";
import FavouriteBeer from "../components/Main/FavouriteBeer/FavouriteBeer.jsx";
import { removeFavourite } from "../store/actions/toggleFavourite.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavourite: (id) => dispatch(removeFavourite(id)),
  };
};

const FavouriteBeerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteBeer);

export default FavouriteBeerConnected;
