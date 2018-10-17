const alert = (state = {message: ''}, action) => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return { message: action.payload.message }
    case 'HIDE_ALERT':
      return { message: '' }
    default: return state
  }
}

const rootReducer = alert

export default rootReducer
