import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import gameReducer from 'store/game/reducer'
import informationReducer from 'store/information/reducer'
import cardReducer from 'store/card/reducer'
import stompReducer from 'store/stomp/reducer'

import applicationSagas from './saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [
    sagaMiddleware
]

const reducers = combineReducers({
    game: gameReducer,
    information: informationReducer,
    card: cardReducer,
    stomp: stompReducer,
})

const store = createStore(reducers, applyMiddleware(...middlewares))
sagaMiddleware.run(applicationSagas)

export default store;