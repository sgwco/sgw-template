import { all } from 'redux-saga/effects';
import templateSaga from './template';
import authSaga from './auth';

export default function* rootSaga() {
  yield all([authSaga(), templateSaga()]);
}
