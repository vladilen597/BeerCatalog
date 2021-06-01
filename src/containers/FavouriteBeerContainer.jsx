import { connect } from "react-redux";
import FavouriteBeer from "../components/Main/FavouriteBeer/FavouriteBeer.jsx";
import { removeFavourite } from "../store/actions/actionCreators/toggleFavourite.jsx";

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

const FavouriteBeerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteBeer);

export default FavouriteBeerConnect;
