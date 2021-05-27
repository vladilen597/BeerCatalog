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
    case "FETCH_BEERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_BEERS_SUCCESS":
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
        favourites: [...state.favourites],
      };
    case "FETCH_BEERS_ERROR":
      return {
        loading: false,
        beers: [],
        error: action.payload,
        isSearched: false,
      };
    case "FIND_BEER":
      return {
        ...state,
        isSearched: true,
      };
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
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
