import { takeEvery, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from 'axios';
import history from 'lib/history';
import { LOGIN, LOGIN_SUCCESS } from './action';
import { get } from 'commons/utils';

export function* login({ email, password }) {
  try {
    const { data } = yield call(axios.post, '/api/auth/login', { email, password });
    yield put({
      type: LOGIN_SUCCESS,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    });
    history.push('/admin');
  } catch (error) {
    const message = get(error, 'response.data.message', error.message);
    toast.error(message);
  }
}

export default function* authSaga() {
  yield takeEvery(LOGIN, login);
}
