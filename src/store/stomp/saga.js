import { put, takeLatest, all } from 'redux-saga/effects'
import { types } from './action'

export function* receivedMessage({ action, message }) {
    yield put(action(JSON.parse(message)))
}


export default function* root() {
    yield all([
        takeLatest(types.STOMP_RECEIVED_MESSAGE, receivedMessage)
    ])
}