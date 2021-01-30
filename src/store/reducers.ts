import {
  SCORE_DOWN_ASYNC, SCORE_UP_ASYNC, SCORE_DOWN, SCORE_UP,
} from '../consts/consts'
import { ScoreAction } from './actions'
import { InitialState } from '../types/redux'

const initialState:InitialState = {
  score: 0,
}

const reducer = (state = initialState, action: ScoreAction): InitialState => {
  const newState = { ...state }

  switch (action.type) {
  case SCORE_UP:
    newState.score += 1
    return newState
  case SCORE_DOWN:
    newState.score -= 1
    return newState
  case SCORE_UP_ASYNC:
    // newState.score += 1
    return newState
  case SCORE_DOWN_ASYNC:
    // newState.score -= 1
    return newState
  default:
    return state
  }
}

export type RootState = ReturnType<typeof reducer>;
export default reducer
