import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import gameReducer from 'store/game/reducer'
import informationReducer from 'store/information/reducer'
import applicationSagas from './saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [
    sagaMiddleware
]

const reducers = combineReducers({
    game: gameReducer,
    information: informationReducer
})

const store = createStore(reducers, applyMiddleware(...middlewares))
sagaMiddleware.run(applicationSagas)

export default store;