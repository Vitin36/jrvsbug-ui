import { fork, all } from 'redux-saga/effects'

import informationSaga from 'store/information/saga'

function* applicationSagas() {
  yield all([
    fork(informationSaga),
  ])
}

export default applicationSagas
