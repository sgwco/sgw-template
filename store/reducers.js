import { combineReducers } from 'redux';
import { adminReducer } from './admin/reducer';
import { authReducer } from './auth/reducer';
import { templateReducer } from './template/reducer';

export default combineReducers({
  template: templateReducer,
  admin: adminReducer,
  auth: authReducer,
});
