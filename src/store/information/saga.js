import {  put, takeLatest, delay, all } from 'redux-saga/effects'
import { actions, types } from './action'

export function* showInformation({ message }) {
    yield put(actions.setMessage(message))
    yield put(actions.setVisible(true))
    yield delay(1000)
    yield put(actions.setVisible(false))
}

export default function* root() {
    yield all([
        takeLatest(types.INFORMATION_SHOW, showInformation)
    ])
}