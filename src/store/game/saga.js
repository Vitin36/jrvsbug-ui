import { put, takeLatest, delay, all, call, take } from 'redux-saga/effects'
import { actions, types } from './action'
import GameProvider from "provider/api/game"
import { actions as informationActions } from 'store/information/action'

export function* startGame({ name }) {
    try {
        yield call(GameProvider.startGame, { name })
    }

    catch (exception) {
        window.alert(exception)
    }
}

export function* makeMoviment({ payload }) {
    try {
        yield call(GameProvider.makeMoviment, payload)
    }
    catch (exception) {
        window.alert(exception)
    }
}

export function* playerMovimentFinished({ game }) {
    yield put(actions.updateGame(game))
    yield put(informationActions.show("Cpu Turn"))
}

export function* cpuMovimentFinished({ game }) {
    yield delay(3000)
    yield put(actions.updateGame(game))
    yield put(informationActions.show("Your Turn"))
}

export function* startedGame() {
    yield put(informationActions.show("Your Turn"))
}


export default function* root() {
    yield all([
        takeLatest(types.GAME_START_GAME, startGame),
        takeLatest(types.GAME_MESSAGE_STARTED_GAME, startedGame),
        takeLatest(types.GAME_MAKE_MOVIMENT, makeMoviment),
        takeLatest(types.GAME_MESSAGE_PLAYER_MOVIMENT_FINISHED, playerMovimentFinished),
        takeLatest(types.GAME_MESSAGE_CPU_MOVIMENT_FINISHED, cpuMovimentFinished)
    ])
}