import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  coordinates: {}
}

export const actionTypes = {
  SET_COORDINATES: 'SET_COORDINATES'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COORDINATES:
      return { ...state, coordinates: action.payload }
    default:
      return state
  }
}

// ACTIONS
export const setCoordinates = payload => dispatch => {
  return dispatch({ type: actionTypes.SET_COORDINATES, payload })
}

export const initStore = () => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
