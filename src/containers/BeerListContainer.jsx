import { connect } from "react-redux";
import BeerList from "../components/Main/BeerList/BeerList";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};

const BeerListConnected = connect(mapStateToProps)(BeerList);

export default BeerListConnected;
