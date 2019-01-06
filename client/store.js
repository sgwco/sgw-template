import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import epics from './epics';
import reducers from './reducers';

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducers, applyMiddleware(epicMiddleware, logger));
epicMiddleware.run(epics);

export default store;
