const FIND_BEER = "FIND_BEER";

const findBeer = (beerName) => {
  return {
    type: FIND_BEER,
    payload: beerName,
  };
};

export default findBeer;
