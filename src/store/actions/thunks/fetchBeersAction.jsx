import {
  fetchBeersRequest,
  fetchBeersSuccess,
  fetchBeersFailure,
  findBeer,
} from "../actionCreators/fetchBeers.jsx";

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

const fetchSingleBeer = (id) => {
  return (dispatch) => {
    dispatch(fetchBeersRequest);
    fetch(`https://api.punkapi.com/v2/beers?ids=${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchBeersSuccess(data));
        dispatch(findBeer());
      })
      .catch((error) => dispatch(fetchBeersFailure(error)));
  };
};

export { fetchBeers, findBeerFetch, filterBeers, fetchSingleBeer };
