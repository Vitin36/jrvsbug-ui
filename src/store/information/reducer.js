import { types } from './action'

const INITIAL_STATE = () => ({
    visible: false,
    message: '',
    color: 'white'
})

const reducer = (state, action) => ({
    [types.INFORMATION_SET_MESSAGE]: (state, { message }) => ({ ...state, message }),
    [types.INFORMATION_SET_VISIBLE]: (state, { visible }) => ({ ...state, visible }),
    [types.INFORMATION_SET_COLOR]: (state, { color }) => ({ ...state, color })
}[action.type] || INITIAL_STATE)(state, action)

export default reducer