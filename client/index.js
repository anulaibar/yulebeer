import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./App";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

store.dispatch({ type: "GET_BEERS" });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
