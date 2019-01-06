import { combineEpics } from 'redux-observable';
import templates from './template';

export default combineEpics(templates);
