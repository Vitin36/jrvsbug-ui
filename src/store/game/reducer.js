import { types } from './action'

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

const getCurrentPlayer = (game) => {
    return game.players.find(player => player.playerType === 'PLAYER')
}

const canMakeMoviment = ({ currentPlayer, game }) => {
    const { indexPlayerTurn } = game
    return game.players[indexPlayerTurn].id == currentPlayer.id
}

const reducer = (state = INITIAL_STATE, action) => {
    const swithTypes = {
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
            }
        },
    }[action.type]
    return swithTypes ? swithTypes(state, action) : state
}

export default reducer