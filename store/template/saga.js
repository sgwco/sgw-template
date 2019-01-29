import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GET_TEMPLATES,
  getTemplateSuccess,
  GET_TEMPLATE_BY_URL,
  getTemplateByUrlSuccess,
  ADD_TEMPLATE_SUCCESS,
  EDIT_TEMPLATE_SUCCESS,
  EDIT_TEMPLATE_FAIL,
  ADD_TEMPLATE_FAIL,
  DELETE_TEMPLATE_SUCCESS,
  ADD_TEMPLATE,
  EDIT_TEMPLATE,
  DELETE_TEMPLATE,
} from './action';
import { get } from 'commons/utils';

export function* getTemplates() {
  const results = yield call(axios.get, '/api/template');
  yield put(getTemplateSuccess(results.data));
}

export function* getTemplateByUrl({ url }) {
  const results = yield call(axios.get, `${process.env.BASE_URL || ''}/api/template/${url}`);
  yield put(getTemplateByUrlSuccess(results.data));
}

export function* addTemplate({ data, cb }) {
  try {
    const template = yield call(axios.post, '/api/template', data);
    yield put({ type: ADD_TEMPLATE_SUCCESS, template: template.data });
    if (cb) {
      cb(template.data);
    }
    toast.success('Tạo mới thành công!');
  } catch (error) {
    yield put({ type: ADD_TEMPLATE_FAIL, id: data.id });
    const message = get(error, 'response.data.message', error.message);
    toast.error(message);
  }
}

export function* editTemplate({ data }) {
  try {
    const template = yield call(axios.patch, '/api/template', data);
    yield put({ type: EDIT_TEMPLATE_SUCCESS, template: template.data });
    toast.success('Chỉnh sửa thành công!');
  } catch (error) {
    yield put({ type: EDIT_TEMPLATE_FAIL, id: data.id });
    const message = get(error, 'response.data.message', error.message);
    toast.error(message);
  }
}

export function* deleteTemplate({ id }) {
  try {
    yield call(axios.delete, `/api/template?id=${id || ''}`);
    yield put({ type: DELETE_TEMPLATE_SUCCESS, id });
    toast.success('Xóa thành công!');
  } catch (error) {
    const message = get(error, 'response.data.message', error.message);
    toast.error(message);
  }
}

export default function* templateSaga() {
  yield takeEvery(GET_TEMPLATES, getTemplates);
  yield takeEvery(GET_TEMPLATE_BY_URL, getTemplateByUrl);
  yield takeEvery(ADD_TEMPLATE, addTemplate);
  yield takeEvery(EDIT_TEMPLATE, editTemplate);
  yield takeEvery(DELETE_TEMPLATE, deleteTemplate);
}
