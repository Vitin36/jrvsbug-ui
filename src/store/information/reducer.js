import { types } from './action'

const INITIAL_STATE = {
    visible: false,
    message: '',
    color: 'white'
}

const reducer = (state = INITIAL_STATE, action) => {
    const swithTypes = {
        [types.INFORMATION_SET_MESSAGE]: (state, { message }) => ({ ...state, message }),
        [types.INFORMATION_SET_VISIBLE]: (state, { visible }) => ({ ...state, visible }),
        [types.INFORMATION_SET_COLOR]: (state, { color }) => ({ ...state, color })
    }[action.type]
    return swithTypes ? swithTypes(state, action) : state
}


export default reducer