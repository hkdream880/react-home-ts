import * as React from 'react' // 해당 타입에는 export default가 없기 때문에 import React from 'react' 불가
import * as ReactDOM from 'react-dom'
// import { hot } from 'react-hot-loader/root'
import App from './app'
import rootReducer from './store/reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

console.log(process.env.ENV)
const sagaMiddleware = createSagaMiddleware()
const store = process.env.ENV === 'dev'?
createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
):
createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

// const HOT = hot(App)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'))
