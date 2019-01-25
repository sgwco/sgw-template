import { createStore, applyMiddleware } from 'redux';
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
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));
const persistor = persistStore(store);
sagaMiddleware.run(sagas);

export { store, persistor };
