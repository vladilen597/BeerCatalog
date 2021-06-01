import { connect } from "react-redux";
import SingleBeer from "../components/SingleBeer/SingleBeer.jsx";
import {
  addFavourite,
  removeFavourite,
} from "../store/actions/actionCreators/toggleFavourite.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: (id) => dispatch(addFavourite(id)),
    removeFavourite: (id) => dispatch(removeFavourite(id)),
  };
};

const SingleBeerConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBeer);

export default SingleBeerConnect;
