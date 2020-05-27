import { fork, all } from 'redux-saga/effects'

import informationSaga from 'store/information/saga'
import gameSaga from 'store/game/saga'
import stompSaga from 'store/stomp/saga'

function* applicationSagas() {
  yield all([
    fork(informationSaga),
    fork(gameSaga),
    fork(stompSaga)
  ])
}

export default applicationSagas
