import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from '../reducers';
import sagas from '../sagas';

export default (initialState, options) => {
  const initSaga = createSagaMiddleware();
  let store = null;

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, initialState, applyMiddleware(initSaga, logger));
  } else {
    store = createStore(reducers, initialState, applyMiddleware(initSaga));
  }

  initSaga.run(sagas);
  return store;
};
