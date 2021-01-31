export interface ScoreState {
  score: number,
}

export interface UserState {
  user: {
    email: string,
  } | null
}

export interface RootState {
  scoreStore: ScoreState,
  userStore: UserState
}