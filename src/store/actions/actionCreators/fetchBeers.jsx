import FETCH_BEERS from "../../../constants/dictionary/FETCH_BEERS.jsx";
import BEER_OPERATIONS from "../../../constants/dictionary/BEER_OPERATIONS.jsx";

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
    type: BEER_OPERATIONS.FIND_BEER,
  };
};

export { fetchBeersRequest, fetchBeersSuccess, fetchBeersFailure, findBeer };
