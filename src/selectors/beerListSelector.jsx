import { createSelector } from "reselect";

const getFavouriteBeers = (state) => state.beersReducer.favourites;
const getIsLoading = (state) => state.beersReducer.isLoading;
const getBeers = (state) => state.beersReducer.beers;

export const getBeersSelector = createSelector([getBeers], (getBeers) => {
  return getBeers;
});

export const getIsLoadingSelector = createSelector(
  [getIsLoading],
  (getIsLoading) => {
    return getIsLoading;
  }
);
