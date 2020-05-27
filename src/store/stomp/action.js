export const types = {
    STOMP_RECEIVED_MESSAGE: 'STOMP_RECEIVED_MESSAGE',
}

export const actions = {
    receivedMessage: (message, action) => ({ type: types.STOMP_RECEIVED_MESSAGE, action, message }),
}

export default actions;