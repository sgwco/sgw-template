import { combineReducers } from 'redux';
import { templateReducer } from './template';
import { adminReducer } from './admin';
import { commonReducer } from './common';

export default combineReducers({
  template: templateReducer,
  admin: adminReducer,
  common: commonReducer,
});
