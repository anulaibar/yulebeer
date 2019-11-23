export function errorGetBeers() {
  return {
    type: "ERROR_GET_BEERS"
  };
}

export function requestGetBeers() {
  return {
    type: "REQUEST_GET_BEERS"
  };
}

export function receiveGetBeers(payload) {
  return {
    type: "RECEIVE_GET_BEERS",
    payload
  };
}

export function getBeers(dispatch) {
  dispatch(requestGetBeers());

  fetch("/api/beers")
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(receiveGetBeers(items)))
    .catch(() => dispatch(errorGetBeers()));
}
