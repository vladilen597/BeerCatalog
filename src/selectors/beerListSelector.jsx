import { createSelector } from "reselect";

const getIsLoading = (state) => state.beersReducer.get("isLoading");
const getBeers = (state) => state.beersReducer.get("beers");

export const getBeersSelector = createSelector([getBeers], (getBeers) => {
  return getBeers;
});

export const getIsLoadingSelector = createSelector(
  [getIsLoading],
  (getIsLoading) => {
    return getIsLoading;
  }
);
