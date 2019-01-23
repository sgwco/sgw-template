import { all } from 'redux-saga/effects';
import templateSaga from './template';

export default function* rootSaga() {
  yield all([templateSaga()]);
}
