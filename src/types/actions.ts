// import { SCORE_DOWN, SCORE_UP } from '../consts/actions'
// import { User } from './common'

import { User } from "./common";

// export const scoreUp = (): {type: string, score: number} => ({ type: SCORE_UP, score: 1 })

// export const scoreDown = (): {type: string, score: number} => ({ type: SCORE_DOWN, score: 1 })

// export const setUser = ({type, user }: {type: string, user: User}) => ({ type, user })

// export type ScoreAction =
//   | ReturnType<typeof scoreUp>
//   | ReturnType<typeof scoreDown>
//   | ReturnType<typeof setUser>;
export interface ScoreAction {
  type: string,
  score: number
}

export interface UserAction {
  type: string,
  user: User
}