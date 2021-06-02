import FETCH_BEERS from "../../constants/dictionary/FETCH_BEERS.jsx";
import BEER_OPERATIONS from "../../constants/dictionary/BEER_OPERATIONS.jsx";
import TOGGLE_FAVOURITE from "../../constants/dictionary/TOGGLE_FAVOURITE.jsx";
import initialState from "../../constants/redux/initialState.jsx";

const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BEERS.SUCCESS:
      return {
        ...state,
        loading: false,
        beers: action.payload,
        favourites:
          localStorage.length > 0 ? JSON.parse(localStorage.getItem(0)) : [],
      };
    case FETCH_BEERS.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
    case TOGGLE_FAVOURITE.GET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default beersReducer;
