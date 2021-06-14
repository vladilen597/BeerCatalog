import { createSelector } from "reselect";

const getFavouriteBeers = (state) => state.beersReducer.get("favourites");

export const getFavouriteBeersSelector = createSelector(
  [getFavouriteBeers],
  (getFavouriteBeers) => {
    return getFavouriteBeers;
  }
);
