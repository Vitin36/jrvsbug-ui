export const types = {
    GAME_START_GAME: 'GAME_START_GAME',
    GAME_LOAD_GAME: 'GAME_LOAD_GAME'
}

export const actions = {
    startGame: () => ({ type: types.GAME_START_GAME }),
    loadGame: () => ({ type: types.GAME_LOAD_GAME })
}

export default actions;