import TOGGLE_FAVOURITE from "../../../constants/dictionary/TOGGLE_FAVOURITE.jsx";

const addFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE.ADD_FAVOURITE,
    payload: id,
  };
};

const removeFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE.REMOVE_FAVOURITE,
    payload: id,
  };
};

const getId = (id) => {
  return {
    type: TOGGLE_FAVOURITE.GET_ID,
    payload: id,
  };
};

export { addFavourite, removeFavourite, getId };
