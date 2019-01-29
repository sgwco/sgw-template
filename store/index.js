import { createStore as initStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import sagas from './sagas';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function makeStore(initialState, { isServer }) {
  let store = null;

  if (isServer) {
    store = initStore(reducers, initialState, applyMiddleware(...middlewares));
  } else {
    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger);
    }
    store = initStore(persistedReducer, initialState, applyMiddleware(...middlewares));
    store.__persistor = persistStore(store);
  }

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  // run the rootSaga initially
  store.runSagaTask();
  return store;
}
