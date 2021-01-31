import { combineReducers } from 'redux'
import {
  SCORE_DOWN_ASYNC, SCORE_UP_ASYNC, SCORE_DOWN, SCORE_UP, SET_USER
} from '../consts/actions'
import scoreStore from './score'
import userStore from './user'
// import { InitialState } from '../types/redux'

// const initialState:InitialState = {
//   score: 0,
//   user: null
// }

// const reducer = (state = initialState, action: ScoreAction | UserAction): InitialState => {
//   const newState = { ...state }

//   switch (action.type) {
//   case SCORE_UP:
//     newState.score += 1
//     return newState
//   case SCORE_DOWN:
//     newState.score -= 1
//     return newState
//   case SCORE_UP_ASYNC:
//     return newState
//   case SCORE_DOWN_ASYNC:
//     return newState
//   case SET_USER: 
//     console.log(SET_USER)
//     console.log(action)
//     return newState
//   default:
//     return state
//   }
// }

export default combineReducers({scoreStore, userStore})
