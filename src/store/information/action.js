export const types = {
    INFORMATION_SHOW: 'INFORMATION_SHOW',
    INFORMATION_SET_VISIBLE: 'INFORMATION_SET_VISIBLE',
    INFORMATION_SET_MESSAGE: 'INFORMATION_SET_MESSAGE',
    INFORMATION_SET_COLOR: 'INFORMATION_SET_COLOR',
}

export const actions = {
    show: message => ({ type: types.INFORMATION_SHOW, message }),
    setVisible: visible => ({ type: types.INFORMATION_SET_VISIBLE, visible }),
    setMessage: message => ({ type: types.INFORMATION_SET_MESSAGE, message }),
    setColor: color => ({ type: types.INFORMATION_SET_MESSAGE, color }),
}

export default actions