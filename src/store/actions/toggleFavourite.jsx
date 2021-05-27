const ADD_FAVOURITE = "ADD_FAVOURITE";
const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

const addFavourite = (id) => {
  return {
    type: ADD_FAVOURITE,
    payload: id,
  };
};

const removeFavourite = (id) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: id,
  };
};

export { addFavourite, removeFavourite };
