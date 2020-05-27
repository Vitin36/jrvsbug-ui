export const types = {
    GAME_START_GAME: 'GAME_START_GAME',
    GAME_LOAD_GAME: 'GAME_LOAD_GAME',
    GAME_UPDATE_GAME: 'GAME_UPDATE_GAME',
    GAME_SET_PLAYER_NAME: 'GAME_SET_PLAYER_NAME',
    GAME_MAKE_MOVIMENT: 'GAME_MAKE_MOVIMENT',
    GAME_MESSAGE_STARTED_GAME: 'GAME_MESSAGE_STARTED_GAME',
    GAME_MESSAGE_PLAYER_MOVIMENT_FINISHED: 'GAME_MESSAGE_PLAYER_MOVIMENT_FINISHED',
    GAME_MESSAGE_CPU_MOVIMENT_FINISHED: 'GAME_MESSAGE_CPU_MOVIMENT_FINISHED',
}

export const actions = {
    startGame: name => ({ type: types.GAME_START_GAME, name }),
    loadGame: () => ({ type: types.GAME_LOAD_GAME }),
    updateGame: game => ({ type: types.GAME_UPDATE_GAME, game }),
    setPlayerName: name => ({ type: types.GAME_SET_PLAYER_NAME, name }),
    makeMoviment: payload => ({ type: types.GAME_MAKE_MOVIMENT, payload }),
    startedGame: game => ({ type: types.GAME_MESSAGE_STARTED_GAME, game }),
    playerMovimentFinished: game => ({ type: types.GAME_MESSAGE_PLAYER_MOVIMENT_FINISHED, game }),
    cpuMovimentFinished: game => ({ type: types.GAME_MESSAGE_CPU_MOVIMENT_FINISHED, game }),
}

export default actions;