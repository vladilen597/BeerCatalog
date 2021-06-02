import { connect } from "react-redux";
import Beer from "../components/Beer/Beer.jsx";
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

const BeerConnect = connect(mapStateToProps, mapDispatchToProps)(Beer);

export default BeerConnect;
