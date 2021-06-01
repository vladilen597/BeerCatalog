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

export default initialState;
