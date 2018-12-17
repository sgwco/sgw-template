import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default (initialState, options) => {
  let store = null;

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware, logger));
  } else {
    store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
  }

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  store.runSagaTask();

  return store;
};
