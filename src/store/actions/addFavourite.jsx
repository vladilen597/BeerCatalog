const ADD_FAVOURITE = "ADD_FAVOURITE";

const addFavourite = (id) => {
  return {
    type: ADD_FAVOURITE,
    payload: id,
  };
};

export default addFavourite;
