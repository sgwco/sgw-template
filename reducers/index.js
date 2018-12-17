import { combineReducers } from 'redux';
import { templateReducer } from './template';

export default combineReducers({
  template: templateReducer,
});
