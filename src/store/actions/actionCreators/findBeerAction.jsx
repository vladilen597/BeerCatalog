import BEER_OPERATIONS from "../../../constants/dictionary/BEER_OPERATIONS.jsx";

const findBeer = (beerName) => {
  return {
    type: BEER_OPERATIONS.FIND_BEER,
    payload: beerName,
  };
};

export default findBeer;
