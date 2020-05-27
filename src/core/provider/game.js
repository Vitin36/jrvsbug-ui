import BaseApi from './api'

const GameProvider = {
    startGame: (player) => {
        return BaseApi.post('/command/game/start', player)
    },
    makeMoviment: ({ gameId, playerId, cardId, type }) => {
        return BaseApi.put(`/command/game/movement/${gameId}/player/${playerId}`, null, {
            params: { type, cardId }
        })
    },
    getGame: (gameId) => {
        return BaseApi.get(`/command/game/${gameId}`)
    }
}

export default GameProvider