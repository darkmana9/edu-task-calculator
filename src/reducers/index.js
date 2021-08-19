import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import example from './example'
import rootSaga from "@/sagas"


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  example,
})

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)


