import { types } from './action'
import gameActions from 'store/game/action'

const INITIAL_STATE = {
    routes: [
        { url: "/topic/game/started", action: gameActions.startedGame },
        { url: "/topic/game/moviment/player/executed", action: gameActions.playerMovimentFinished },
        { url: "/topic/game/moviment/cpu/executed", action: gameActions.cpuMovimentFinished }
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    const swithTypes = {}[action.type]
    return swithTypes ? swithTypes(state, action) : state
}

export default reducer