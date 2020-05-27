import { types } from './action'

const INITIAL_STATE = {
    selectedCard: {}
}

const reducer = (state = INITIAL_STATE, action) => {
    const switchTypes = {
        [types.SET_SELECTED_CARD]: (state, { selectedCard }) => ({ ...state, selectedCard })
    }[action.type]
    return switchTypes ? switchTypes(state, action) : state
}

export default reducer