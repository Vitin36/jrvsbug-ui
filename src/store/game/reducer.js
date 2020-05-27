import { types } from './action'
import { getCurrentPlayer, canMakeMoviment, gameFinished } from 'interactor/game'

const INITIAL_STATE = {
    started: false,
    ended: false,
    game: {
        players: []
    },
    currentPlayer: {
        name: ''
    },
    canMakeMoviment: false,
    playerName: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    const swithTypes = {
        [types.GAME_RESET_GAME]: () => INITIAL_STATE,
        [types.GAME_LOAD_GAME]: (state) => ({ ...state, ola: true }),
        [types.GAME_START_GAME]: (state) => ({ ...state, ola: true }),
        [types.GAME_SET_PLAYER_NAME]: (state, { name }) => {
            const { currentPlayer } = state
            return { ...state, currentPlayer: { ...currentPlayer, name } }
        },
        [types.GAME_MESSAGE_STARTED_GAME]: (state, { game }) => {
            const currentPlayer = getCurrentPlayer(game)
            return {
                ...state,
                game,
                started: true,
                currentPlayer,
                canMakeMoviment: canMakeMoviment({ currentPlayer, game }),
            }
        },
        [types.GAME_UPDATE_GAME]: (state, { game }) => {
            const currentPlayer = getCurrentPlayer(game)
            return {
                ...state,
                game,
                started: true,
                currentPlayer,
                canMakeMoviment: canMakeMoviment({ currentPlayer, game }),
                ended: gameFinished(game)
            }
        },
    }[action.type]
    return swithTypes ? swithTypes(state, action) : state
}

export default reducer