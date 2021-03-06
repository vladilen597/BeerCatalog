import FETCH_BEERS from "../../constants/notResourses/dictionary/FETCH_BEERS.jsx";
import BEER_OPERATIONS from "../../constants/notResourses/dictionary/BEER_OPERATIONS.jsx";
import TOGGLE_FAVOURITE from "../../constants/notResourses/dictionary/TOGGLE_FAVOURITE.jsx";

const initialState = {
  loading: false,
  beers: [],
  error: "",
  isSearched: false,
  filter: {
    alcohol: 0,
    unit: 0,
    color: 0,
  },
  favourites: [],
};

const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BEERS.SUCCESS:
      return {
        loading: false,
        beers: action.payload,
        error: "",
        isSearched: false,
        filter: {
          alcohol: 0,
          unit: 0,
          color: 0,
        },
        favourites:
          localStorage.length > 0 ? JSON.parse(localStorage.getItem(0)) : [],
      };
    case FETCH_BEERS.FAILURE:
      return {
        loading: false,
        beers: [],
        error: action.payload,
        isSearched: false,
      };
    case BEER_OPERATIONS.FIND_BEER:
      return {
        ...state,
        isSearched: true,
      };
    case TOGGLE_FAVOURITE.ADD_FAVOURITE:
      localStorage.setItem(
        0,
        JSON.stringify([...state.favourites, action.payload])
      );
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case TOGGLE_FAVOURITE.REMOVE_FAVOURITE:
      localStorage.setItem(
        0,
        JSON.stringify(
          state.favourites.filter((item) => {
            return item != action.payload;
          })
        )
      );
      return {
        ...state,
        favourites: state.favourites.filter((item) => {
          return item != action.payload;
        }),
      };
    default:
      return state;
  }
};

export default beersReducer;
