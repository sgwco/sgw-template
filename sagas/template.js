import axios from 'axios';
import { toast } from 'react-toastify';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  GET_TEMPLATES,
  GET_TEMPLATES_SUCCESS,
  ADD_TEMPLATE,
  ADD_TEMPLATE_SUCCESS,
  EDIT_TEMPLATE,
  EDIT_TEMPLATE_SUCCESS,
  DELETE_TEMPLATE,
  DELETE_TEMPLATE_SUCCESS,
} from '../reducers/template';

export function* getTemplates() {
  try {
    const templates = yield call(axios.get, '/api/template');
    yield put({ type: GET_TEMPLATES_SUCCESS, listTemplates: templates.data });
  } catch (error) {
    toast.error(error.response.data.message);
  }
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
    toast.error(error.response.data.message);
  }
}

export function* editTemplate({ data }) {
  try {
    const template = yield call(axios.patch, '/api/template', data);
    yield put({ type: EDIT_TEMPLATE_SUCCESS, template: template.data });
    toast.success('Chỉnh sửa thành công!');
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export function* deleteTemplate({ id }) {
  try {
    yield call(axios.delete, `/api/template?id=${id || ''}`);
    yield put({ type: DELETE_TEMPLATE_SUCCESS, id });
    toast.success('Xóa thành công!');
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export default function* templateSaga() {
  yield takeEvery(GET_TEMPLATES, getTemplates);
  yield takeEvery(ADD_TEMPLATE, addTemplate);
  yield takeEvery(EDIT_TEMPLATE, editTemplate);
  yield takeEvery(DELETE_TEMPLATE, deleteTemplate);
}
