import { takeEvery, call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from 'axios';
import history from '../history';
import { LOGIN, LOGIN_SUCCESS } from '../actions/auth';

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
