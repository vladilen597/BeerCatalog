const FETCH_BEERS = {
  REQUEST: "FETCH_BEERS_REQUEST",
  SUCCESS: "FETCH_BEERS_SUCCESS",
  FAILURE: "FETCH_BEERS_FAILURE",
  FIND_BEER: "FIND_BEER",
  FILTER: "FILTER",
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

const findBeer = () => {
  return {
    type: FETCH_BEERS.FIND_BEER,
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

const findBeerFetch = (name) => {
  return (dispatch) => {
    dispatch(fetchBeersRequest);
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchBeersSuccess(data));
        dispatch(findBeer());
      })
      .catch((error) => dispatch(fetchBeersFailure(error)));
  };
};

const filterBeers = (alcohol, unit, color) => {
  return (dispatch) => {
    dispatch(fetchBeersRequest);
    fetch(
      `https://api.punkapi.com/v2/beers?abv_lt=${alcohol}&ibu_lt=${unit}&ebc_lt=${color}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchBeersSuccess(data));
        dispatch(findBeer());
      })
      .catch((error) => dispatch(fetchBeersFailure(error)));
  };
};

export { fetchBeers, findBeerFetch, filterBeers };
