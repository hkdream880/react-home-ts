import { SCORE_DOWN, SCORE_UP } from '../consts/consts'

export const scoreUp = (): {type: string, score: number} => ({ type: SCORE_UP, score: 1 })

export const scoreDown = (): {type: string, score: number} => ({ type: SCORE_DOWN, score: 1 })

export type ScoreAction =
  | ReturnType<typeof scoreUp>
  | ReturnType<typeof scoreDown>;
