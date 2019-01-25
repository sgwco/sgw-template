import { combineReducers } from 'redux';
import { templateReducer } from './template';
import { adminReducer } from './admin';
import { authReducer } from './auth';

export default combineReducers({
  template: templateReducer,
  admin: adminReducer,
  auth: authReducer,
});
