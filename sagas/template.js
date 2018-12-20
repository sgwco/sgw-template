import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  GET_TEMPLATES,
  GET_TEMPLATES_SUCCESS,
  ADD_TEMPLATE,
  ADD_TEMPLATE_SUCCESS,
} from '../reducers/template';

export function* getTemplates() {
  try {
    const templates = yield call(axios.get, '/api/template');
    yield put({ type: GET_TEMPLATES_SUCCESS, listTemplates: templates.data });
  } catch (error) {
    // Code
  }
}

export function* addTemplate({ data }) {
  try {
    const template = yield call(axios.post, '/api/template', data);
    yield put({ type: ADD_TEMPLATE_SUCCESS, template: template.data });
  } catch (error) {
    // Code
  }
}

export default function* templateSaga() {
  yield takeEvery(GET_TEMPLATES, getTemplates);
  yield takeEvery(ADD_TEMPLATE, addTemplate);
}
