import actions from 'store/game/action'

export const config = {
    url: 'http://localhost:8000/game',
    topics: [
        {
            route: '/topic/game/started',
            action: actions.setGame
        }
    ]
}