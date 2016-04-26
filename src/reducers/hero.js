import { SET_PRODUCT } from '../constants/actionTypes'

const initialState = {
  displayed: 'mq',
}

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
export default function fuelSavingsAppState (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT: {
      return {
        ...state,
        displayed: action.product,
      }
    }
    default:
      return state
  }
}
