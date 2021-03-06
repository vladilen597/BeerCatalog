import { connect } from "react-redux";
import Filter from "../components/Main/FindField/Filter/Filter.jsx";
import { filterBeers } from "../store/actions/fetchBeersAction.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterBeers: (alcohol, unit, color) =>
      dispatch(filterBeers(alcohol, unit, color)),
  };
};

const FilterConnected = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterConnected;
