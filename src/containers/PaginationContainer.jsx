import { connect } from "react-redux";
import Pagination from "../components/Main/Pagination/Pagination.jsx";
import fetchBeers from "../store/actions/fetchBeersAction.jsx";

const mapStateToProps = (state) => {
  return {
    state: state.beersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: (page) => dispatch(fetchBeers(page)),
  };
};

const PaginationConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);

export default PaginationConnected;
