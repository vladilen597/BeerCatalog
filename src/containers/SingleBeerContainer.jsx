import { connect } from "react-redux";
import SingleBeer from "../components/SingleBeer/SingleBeer.jsx";
import addFavourite from "../store/actions/addFavourite.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: (id) => dispatch(addFavourite(id)),
  };
};

const SingleBeerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBeer);

export default SingleBeerConnected;
