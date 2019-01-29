import React from 'react';
import { hydrate, render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import history from './history';
import createStore from './store';
import App from './app';

const { store, persistor } = createStore(window.REDUX_DATA);
delete window.REDUX_DATA;

class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

if (process.env.NODE_ENV === 'development') {
  render(<AppRouter />, document.getElementById('root'));
} else {
  hydrate(<AppRouter />, document.getElementById('root'));
  // registerServiceWorker();
}
