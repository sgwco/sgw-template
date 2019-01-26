import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import history from './history';
import { store, persistor } from './store';
import App from './app';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <React.Suspense fallback={null}>
              <App />
            </React.Suspense>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
