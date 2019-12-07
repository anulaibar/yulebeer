import { combineReducers } from "redux";

const alert = (state = { message: "" }, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return { message: action.payload.message };
    case "HIDE_ALERT":
      return { message: "" };
    default:
      return state;
  }
};

const beers = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_BEERS":
      return action.payload;
    default:
      return state;
  }
};

const cards = (state = [], action) => {
  switch (action.type) {
    case "FLIP_CARD":
      return state.map((flag, index) => {
        if (index !== action.payload) {
          return flag;
        }
        return !flag;
      });
    default:
      return state;
  }
};

export default combineReducers({
  alert,
  beers,
  cards
});
