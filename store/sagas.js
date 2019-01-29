import { all } from 'redux-saga/effects';
import templateSaga from './template/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
  yield all([authSaga(), templateSaga()]);
}
