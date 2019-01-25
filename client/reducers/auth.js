import { LOGIN_SUCCESS } from '../actions/auth';

const initState = {
  accessToken: '',
  refreshToken: '',
};

export function authReducer(state = initState, action = {}) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOGIN_SUCCESS:
      newState.accessToken = action.accessToken;
      newState.refreshToken = action.refreshToken;
      break;
  }

  return newState;
}
