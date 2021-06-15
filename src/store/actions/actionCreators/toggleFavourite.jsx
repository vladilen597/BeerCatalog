import TOGGLE_FAVOURITE from "../../../constants/dictionary/TOGGLE_FAVOURITE.jsx";

const addFavourite = () => {
  return {
    type: TOGGLE_FAVOURITE.ADD_FAVOURITE,
  };
};

const removeFavourite = () => {
  return {
    type: TOGGLE_FAVOURITE.REMOVE_FAVOURITE,
  };
};

const getId = (id) => {
  return {
    type: TOGGLE_FAVOURITE.GET_ID,
    payload: id,
  };
};

export { addFavourite, removeFavourite, getId };
