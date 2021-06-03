import { connect } from "react-redux";
import Beer from "../components/Beer/Beer.jsx";
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
    addFavourite: () => dispatch(addFavourite()),
    removeFavourite: () => dispatch(removeFavourite()),
    getId: (id) => dispatch(getId(id)),
  };
};

const BeerConnect = connect(mapStateToProps, mapDispatchToProps)(Beer);

export default BeerConnect;
