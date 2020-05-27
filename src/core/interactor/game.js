export const gameFinished = (game) => {
    return game.gameStatus === "FINISHED"
}

export const getCurrentPlayer = (game) => {
    return game.players.find(player => player.playerType === 'PLAYER')
}

export const canMakeMoviment = ({ currentPlayer, game }) => {
    const { indexPlayerTurn } = game
    return game.players[indexPlayerTurn].id == currentPlayer.id
}

export const getWinner = (game) => {
    const winner = game.players.find(player => player.life >= 1)
    return winner
}