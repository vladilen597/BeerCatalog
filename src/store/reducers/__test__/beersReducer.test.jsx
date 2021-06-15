import beersReducer from "../beersReducer.jsx";
import FETCH_BEERS from "../../../constants/dictionary/FETCH_BEERS.jsx";
import BEER_OPERATION from "../../../constants/dictionary/BEER_OPERATION.jsx";
import TOGGLE_FAVOURITE from "../../../constants/dictionary/TOGGLE_FAVOURITE.jsx";
import initialState from "../../../constants/redux/initialState.jsx";
import { Map } from "immutable";
import { testBeer } from "../../../constants/dictionary/testBeer.jsx";

describe("Beers reducer", () => {
  it("Should return the initial state", () => {
    expect(beersReducer(undefined, {})).toEqual(initialState);
  });

  it("Should process FETCH_BEERS.REQUEST", () => {
    expect(
      beersReducer(initialState, {
        type: FETCH_BEERS.REQUEST,
        payload: "Error message",
      })
    ).toEqual(
      Map({
        isLoading: true,
        beers: [],
        error: "",
        isSearched: false,
        filter: {
          alcohol: 0,
          unit: 0,
          color: 0,
        },
        favourites: [],
        id: 0,
      })
    );
  });

  it("Should process FETCH_BEERS.SUCCESS", () => {
    expect(
      beersReducer(initialState, {
        type: FETCH_BEERS.SUCCESS,
        payload: testBeer,
      })
    ).toEqual(
      Map({
        isLoading: false,
        beers: testBeer,
        error: "",
        isSearched: false,
        filter: {
          alcohol: 0,
          unit: 0,
          color: 0,
        },
        favourites: [],
        id: 0,
      })
    );
  });

  it("Should process ADD_FAVOURITE", () => {
    expect(
      beersReducer(initialState, {
        type: TOGGLE_FAVOURITE.ADD_FAVOURITE,
        payload: 1,
      })
    ).toEqual(
      Map({
        isLoading: false,
        beers: [],
        error: "",
        isSearched: false,
        filter: {
          alcohol: 0,
          unit: 0,
          color: 0,
        },
        favourites: [0],
        id: 0,
      })
    );
  });

  it("Should process GET_ID", () => {
    expect(
      beersReducer(initialState, {
        type: TOGGLE_FAVOURITE.GET_ID,
        payload: 1,
      })
    ).toEqual(
      Map({
        isLoading: false,
        beers: [],
        error: "",
        isSearched: false,
        filter: {
          alcohol: 0,
          unit: 0,
          color: 0,
        },
        favourites: [0],
        id: 1,
      })
    );
  });

  it("Should process FIND_BEER", () => {
    expect(
      beersReducer(initialState, {
        type: BEER_OPERATION.FIND_BEER,
        payload: "Trashy",
      })
    ).toEqual(
      Map({
        isLoading: false,
        beers: [],
        error: "",
        isSearched: true,
        filter: {
          alcohol: 0,
          unit: 0,
          color: 0,
        },
        favourites: [0],
        id: 0,
      })
    );
  });
});
