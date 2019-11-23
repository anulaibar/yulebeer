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
    case "RECEIVE_GET_BEERS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  alert,
  beers
});
