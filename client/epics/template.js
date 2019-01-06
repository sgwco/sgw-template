import { ofType, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { GET_TEMPLATES, getTemplateSuccess } from '../actions/template';

export const getTemplateEpic = action$ =>
  action$.pipe(
    ofType(GET_TEMPLATES),
    mergeMap(() =>
      ajax.getJSON('/api/template').pipe(map(response => getTemplateSuccess(response)))
    )
  );

export default combineEpics(getTemplateEpic);
