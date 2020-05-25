import { types } from './action'

const INITIAL_STATE = () => ({
    working: true
})

const reducer = (state = INITIAL_STATE, action) => ({
    [types.GAME_LOAD_GAME]: (state) => ({ ...state, ola: true }),
    [types.GAME_START_GAME]: (state) => ({ ...state, ola: true }),
}[action.type] || INITIAL_STATE)(state, action)

export default reducer