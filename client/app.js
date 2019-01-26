import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import history from './history';
import { store, persistor } from './store';
import { get } from '../constants/utils';

const HomePage = React.lazy(() => import('./components/homepage'));
const Preview = React.lazy(() => import('./components/preview'));
const AdminLogin = React.lazy(() => import('./components/admin/admin-login'));
const AdminHomepage = React.lazy(() => import('./components/admin/admin-homepage'));
const AdminWebTemplate = React.lazy(() => import('./components/admin/admin-web-template'));

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const state = store.getState();
      const token = get(state, 'auth.accessToken', '');
      if (token) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/admin/login" />;
      }
    }}
  />
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <React.Suspense fallback={null}>
              <Switch>
                <Route path="/" exact render={props => <HomePage {...props} />} />
                <Route path="/preview/:url" exact render={props => <Preview {...props} />} />
                <ProtectedRoute path="/admin" exact component={AdminHomepage} />
                <Route path="/admin/login" exact render={props => <AdminLogin {...props} />} />
                <ProtectedRoute path="/admin/web-template" exact component={AdminWebTemplate} />
              </Switch>
            </React.Suspense>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
