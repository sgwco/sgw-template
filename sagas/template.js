import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_TEMPLATES, GET_TEMPLATES_SUCCESS } from '../reducers/template';

async function getApi(url) {
  return await axios.get(url);
}

export function* getTemplates({ page = 0 }) {
  try {
    const templates = yield call(getApi, `http://localhost:3000/api/template?page=${page}`);
    yield put({ type: GET_TEMPLATES_SUCCESS, listTemplates: templates.data });
  } catch (error) {
    console.log(error);
  }
}

export default function* templateSaga() {
  yield takeEvery(GET_TEMPLATES, getTemplates);
}
