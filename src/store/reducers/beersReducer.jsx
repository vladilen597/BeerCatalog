import FETCH_BEERS from "../../constants/dictionary/FETCH_BEERS.jsx";
import BEER_OPERATION from "../../constants/dictionary/BEER_OPERATION.jsx";
import TOGGLE_FAVOURITE from "../../constants/dictionary/TOGGLE_FAVOURITE.jsx";
import initialState from "../../constants/redux/initialState.jsx";

const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS.REQUEST:
      return state.update("isLoading", (loading) => (loading = true));

    case FETCH_BEERS.SUCCESS:
      state = state.update("isLoading", (loading) => (loading = false));
      state = state.update("favourites", (liked) =>
        localStorage.length > 0
          ? (liked = JSON.parse(localStorage.getItem(0)))
          : (liked = [])
      );
      return state.update("beers", (beers) => (beers = action.payload));

    case FETCH_BEERS.FAILURE:
      return state.update("error", (errorMessage) => {
        errorMessage = action.payload;
      });

    case BEER_OPERATION.FIND_BEER:
      return state.update("isSearched", (isSearched) => (isSearched = true));

    case TOGGLE_FAVOURITE.ADD_FAVOURITE:
      const tempArray = state.get("favourites");
      tempArray.push(state.get("id"));
      localStorage.setItem(0, JSON.stringify(tempArray));
      return state.set("favourites", [...state.get("favourites")]);

    case TOGGLE_FAVOURITE.REMOVE_FAVOURITE:
      const newFavouritesArray = state.get("favourites").filter((item) => {
        return item != state.get("id");
      });

      localStorage.setItem(0, JSON.stringify(newFavouritesArray));
      return state.update(
        "favourites",
        (liked) => (liked = newFavouritesArray)
      );

    case TOGGLE_FAVOURITE.GET_ID:
      return state.update("id", (id) => (id = action.payload));

    default:
      return state;
  }
};

export default beersReducer;
