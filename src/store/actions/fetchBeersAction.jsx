const FETCH_BEERS = {
  REQUEST: "FETCH_BEERS_REQUEST",
  SUCCESS: "FETCH_BEERS_SUCCESS",
  FAILURE: "FETCH_BEERS_FAILURE",
};

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

const fetchBeers = (page = 1) => {
  return (dispatch) => {
    dispatch(fetchBeersRequest);
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=18`)
      .then((res) => res.json())
      .then((data) => dispatch(fetchBeersSuccess(data)))
      .catch((error) => dispatch(fetchBeersFailure(error)));
  };
};

export default fetchBeers;
