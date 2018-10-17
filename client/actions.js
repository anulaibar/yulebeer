export function errorGetBeers() {
  return {
    type: 'ERROR_GET_BEERS'
  }
}

export function requestGetBeers() {
  return {
    type: 'REQUEST_GET_BEERS'
  }
}

export function receiveGetBeers(beers) {
  return {
    type: 'RECEIVE_GET_BEERS',
    payload: {
      beers
    }
  }
}

export function getBeers(dispatch) {
  dispatch(requestGetBeers());

  fetch('/api/beers')
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  })
  .then((response) => response.json())
  .then((items) => dispatch(receiveGetBeers(items)))
  .catch(() => dispatch(errorGetBeers()))
}
