import { put, takeEvery, delay, all, call, select } from 'redux-saga/effects'
import { actions, types } from './action'
import { actions as informationActions } from 'store/information/action'
import { actions as cardActions } from 'store/card/action'
import GameProvider from "provider/game"
import { gameFinished, setGameInStorage, clearGameInStorage } from 'interactor/game'

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
    const { game: { id } } = yield select((state) => state.game)
    if (id == game.id) {
        yield put(actions.updateGame(game))
        yield put(cardActions.setSelectedCard({}))
        if (!gameFinished(game)) {
            yield put(informationActions.show("Cpu Turn"))
        }
    }
}

export function* cpuMovimentFinished({ game }) {
    const { game: { id } } = yield select((state) => state.game)
    if (id == game.id) {
        yield delay(3000)
        yield put(actions.updateGame(game))
        if (!gameFinished(game)) {
            yield put(informationActions.show("Your Turn"))
        }
    }
}

export function* findGame({ gameId }) {
    try {
        const { data } = yield call(GameProvider.getGame, gameId)
        const { gameStatus } = data
        if (gameStatus == "PROGRESS") {
            yield put(actions.updateGame(data))
        }
        else{
            yield call(clearGameInStorage)
        }
    }
    catch (error) {
        window.alert(error)
    }
}

export function* startedGame({ game }) {
    const { game: { id } } = yield select((state) => state.game)
    if (!id) {
        yield call(setGameInStorage, game.id)
        yield put(actions.updateGame(game))
        yield put(informationActions.show("Your Turn"))
    }
}

export function* resetGame() {
    yield put(informationActions.resetInformation())
    yield put(cardActions.resetCard())
    yield call(clearGameInStorage)
}

export default function* root() {
    yield all([
        takeEvery(types.GAME_START_GAME, startGame),
        takeEvery(types.GAME_MAKE_MOVIMENT, makeMoviment),
        takeEvery(types.GAME_RESET_GAME, resetGame),
        takeEvery(types.GAME_MESSAGE_STARTED_GAME, startedGame),
        takeEvery(types.GAME_MESSAGE_PLAYER_MOVIMENT_FINISHED, playerMovimentFinished),
        takeEvery(types.GAME_MESSAGE_CPU_MOVIMENT_FINISHED, cpuMovimentFinished),
        takeEvery(types.GAME_FIND_GAME, findGame)
    ])
}