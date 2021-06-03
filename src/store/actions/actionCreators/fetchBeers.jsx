import FETCH_BEERS from "../../../constants/dictionary/FETCH_BEERS.jsx";
import BEER_OPERATION from "../../../constants/dictionary/BEER_OPERATION.jsx";

const fetchBeersRequest = () => {
  return {
    type: FETCH_BEERS.REQUEST,
  };
};

const fetchBeersSuccess = (beers) => {
  return {
    type: FETCH_BEERS.SUCCESS,
    payload: beers,
  };
};

const fetchBeersFailure = (error) => {
  return {
    type: FETCH_BEERS.FAILURE,
    payload: error,
  };
};

const findBeer = () => {
  return {
    type: BEER_OPERATION.FIND_BEER,
  };
};

export { fetchBeersRequest, fetchBeersSuccess, fetchBeersFailure, findBeer };
