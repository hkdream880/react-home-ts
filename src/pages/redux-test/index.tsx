// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Button } from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SCORE_DOWN, SCORE_UP_ASYNC } from '../../consts/actions'
import { ScoreState, RootState } from '../../types/redux'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const ReduxTest: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const score:number = useSelector((state:RootState) => state.scoreStore.score)
  console.log(score)
  const btnClickHandler = (e: MouseEvent): void => {
    e.preventDefault()
    dispatch({ type: e.currentTarget.getAttribute('data-type') })
  }

  return (
    <div>
      <div className={classes.root}>
        <div>{score}</div>
        <ButtonGroup color="primary" aria-label="outlined secondary button group">
          <Button onClick={btnClickHandler} data-type={SCORE_UP_ASYNC}>UP widh SAGA</Button>
          <Button onClick={btnClickHandler} data-type={SCORE_DOWN}>DOWN</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
export default ReduxTest
