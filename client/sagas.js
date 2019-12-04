import { put, takeLatest } from "redux-saga/effects";

function* getBeers() {
  try {
    const successResponse = yield fetch("/api/beers");
    const payload = yield successResponse.json();
    yield put({ type: "RECEIVE_BEERS", payload });
  } catch (error) {
    console.log(error);
    yield put({ type: "RECEIVE_BEERS", error: true, payload: error.message });
  }
}

function* mySaga() {
  yield takeLatest("GET_BEERS", getBeers);
}

export default mySaga;
