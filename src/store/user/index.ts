import {
  SET_USER, REMOVE_USER
} from '../../consts/actions'
import { ScoreAction, UserAction } from '../../types/actions'
import { UserState } from '../../types/redux'

const initialState:UserState = {
  user: null,
}

const reducer = (state = initialState, action: UserAction): UserState => {
  const newState = { ...state }

  switch (action.type) {
  case SET_USER: 
    const user = action.user
    newState.user = {...user}
    return newState
  case REMOVE_USER: 
    newState.user = null
    return newState
  default:
    return state
  }
}

export type RootState = ReturnType<typeof reducer>;
export default reducer
