export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';

export const login = (email, password) => ({ type: LOGIN, email, password });
