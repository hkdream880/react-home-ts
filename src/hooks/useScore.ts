import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { RootState } from '../store/reducers'
import { scoreDown, scoreUp } from '../store/actions'

interface UseScoreResult {
  score: number,
  onScoreUp: () => {
    type: string;
    score: number;
  },
  onScoreDown: () => {
    type: string;
    score: number;
  },
}

export default function useScore(): UseScoreResult {
  const score = useSelector((state: RootState) => state.score)
  const dispatch = useDispatch()

  const onScoreUp = useCallback(() => dispatch(scoreUp()), [dispatch])
  const onScoreDown = useCallback(() => dispatch(scoreDown()), [dispatch])

  return { score, onScoreUp, onScoreDown }
}
