import { combineReducers } from 'redux';
import { templateReducer } from './template';
import { adminReducer } from './admin';

export default combineReducers({
  template: templateReducer,
  admin: adminReducer,
});
