import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { userActions } from './user/userActions'
import {getSagaData} from './user/userSaga'


function* rootSaga() {
  yield all([
    takeLatest(
        userActions.GET_DATA,
        getSagaData
    ),
    
  ])
}

export default rootSaga
