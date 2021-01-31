import {
  SCORE_DOWN_ASYNC, SCORE_UP_ASYNC, SCORE_DOWN, SCORE_UP, SET_USER
} from '../../consts/actions'
import { ScoreAction, UserAction } from '../../types/actions'
import { ScoreState } from '../../types/redux'

const initialState:ScoreState = {
  score: 0,
}

const reducer = (state = initialState, action: ScoreAction): ScoreState => {
  const newState = { ...state }

  switch (action.type) {
  case SCORE_UP:
    newState.score += 1
    return newState
  case SCORE_DOWN:
    newState.score -= 1
    return newState
  case SCORE_UP_ASYNC:
    return newState
  case SCORE_DOWN_ASYNC:
    return newState
  default:
    return state
  }
}

// export type RootState = ReturnType<typeof reducer>;
export default reducer
