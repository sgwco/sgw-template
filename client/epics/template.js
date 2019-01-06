import { ofType, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import {
  GET_TEMPLATES,
  getTemplateSuccess,
  GET_TEMPLATE_BY_URL,
  getTemplateByUrlSuccess,
} from '../actions/template';

export const getTemplateEpic = action$ =>
  action$.pipe(
    ofType(GET_TEMPLATES),
    mergeMap(() =>
      ajax.getJSON('/api/template').pipe(map(response => getTemplateSuccess(response)))
    )
  );

export const getTemplateByUrlEpic = action$ =>
  action$.pipe(
    ofType(GET_TEMPLATE_BY_URL),
    mergeMap(action =>
      ajax
        .getJSON(`/api/template/${action.url}`)
        .pipe(map(response => getTemplateByUrlSuccess(response)))
    )
  );

export default combineEpics(getTemplateEpic, getTemplateByUrlEpic);
