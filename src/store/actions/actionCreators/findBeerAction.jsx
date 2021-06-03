import BEER_OPERATION from "../../../constants/dictionary/BEER_OPERATION.jsx";

const findBeer = (beerName) => {
  return {
    type: BEER_OPERATION.FIND_BEER,
    payload: beerName,
  };
};

export default findBeer;
