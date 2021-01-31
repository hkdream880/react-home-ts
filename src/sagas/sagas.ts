import {
  takeEvery, put, delay, all,
} from 'redux-saga/effects'
import {
  SCORE_DOWN_ASYNC,
  SCORE_UP_ASYNC,
  SCORE_DOWN,
  SCORE_UP,
} from '../consts/actions'

function* scoreUpAsync() {
  yield delay(2000)
  // yield put({ type: SCORE_UP_ASYNC, score: 1 })
  yield put({ type: SCORE_UP, score: 1 })
}

function* scoreDownAsync() {
  /*
    이떄 서버API 요청과 같은 비동기 요청시
    call, fork 가 있다.
    fork 는 비동기 이기 떄문에 call을 사용하도록
  */

  yield delay(2000)
  yield put({ type: SCORE_DOWN, score: 1 })
}

function* watchScoreUp() {
  // yield takeEvery(SCORE_UP, scoreUpAsync)
  yield takeEvery(SCORE_UP_ASYNC, scoreUpAsync)
}

function* watchScoreDown() {
  yield takeEvery(SCORE_DOWN_ASYNC, scoreDownAsync)
}

export default function* rootSaga(): Generator {
  yield all([watchScoreUp(), watchScoreDown()])
}
