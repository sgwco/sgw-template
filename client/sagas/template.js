import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import history from '../history';
import {
  GET_TEMPLATES,
  getTemplateSuccess,
  GET_TEMPLATE_BY_URL,
  getTemplateByUrlSuccess,
} from '../actions/template';

export function* getTemplates() {
  const results = yield call(axios.get, '/api/template');
  yield put(getTemplateSuccess(results.data));
}

export function* getTemplateByUrl({ url }) {
  try {
    const results = yield call(axios.get, `/api/template/${url}`);
    yield put(getTemplateByUrlSuccess(results.data));
  } catch (error) {
    history.push('/');
  }
}

// export function* addTemplate({ data, cb }) {
//   try {
//     const template = yield call(axios.post, '/api/template', data);
//     yield put({ type: ADD_TEMPLATE_SUCCESS, template: template.data });
//     if (cb) {
//       cb(template.data);
//     }
//     toast.success('Tạo mới thành công!');
//   } catch (error) {
//     yield put({ type: ADD_TEMPLATE_FAIL });
//     toast.error(error.response.data.message);
//   }
// }

// export function* editTemplate({ data }) {
//   try {
//     const template = yield call(axios.patch, '/api/template', data);
//     yield put({ type: EDIT_TEMPLATE_SUCCESS, template: template.data });
//     toast.success('Chỉnh sửa thành công!');
//   } catch (error) {
//     yield put({ type: EDIT_TEMPLATE_FAIL, id: data.id });
//     toast.error(error.response.data.message);
//   }
// }

// export function* deleteTemplate({ id }) {
//   try {
//     yield call(axios.delete, `/api/template?id=${id || ''}`);
//     yield put({ type: DELETE_TEMPLATE_SUCCESS, id });
//     toast.success('Xóa thành công!');
//   } catch (error) {
//     toast.error(error.response.data.message);
//   }
// }

export default function* templateSaga() {
  yield takeEvery(GET_TEMPLATES, getTemplates);
  yield takeEvery(GET_TEMPLATE_BY_URL, getTemplateByUrl);
}
