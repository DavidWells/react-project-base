import { combineReducers } from 'redux'
import heroAppState from './hero'

const rootReducer = combineReducers({
  heroAppState,
})

export default rootReducer
