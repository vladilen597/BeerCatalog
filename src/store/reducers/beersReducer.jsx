const initialState = {
  loading: false,
  beers: [],
  error: "",
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
      };
    case "FETCH_BEERS_ERROR":
      return {
        loading: false,
        beers: [],
        error: action.payload,
      };
    case "FIND_BEER":
      if (action.payload == "") {
        console.log(state);
        return state;
      }
      return {
        ...state,
        beers: state.beers.filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default beersReducer;
