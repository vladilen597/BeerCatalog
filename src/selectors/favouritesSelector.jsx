import { createSelector } from "reselect";

const getFavouriteBeers = (state) => state.beersReducer.favourites;

const getBeers = (state) => state.beersReducer.beers;

export const getFavouriteBeersSelector = createSelector(
  [getFavouriteBeers],
  (getFavouriteBeers) => {
    return getFavouriteBeers;
  }
);

export const getBeersSelector = createSelector([getBeers], (getBeers) => {
  return getBeers;
});
