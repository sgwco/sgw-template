import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { get } from 'lodash';
import store from './store';
import history from './history';
import { Loader } from './commons/loader';

const HomePage = React.lazy(() => import('./components/homepage'));
const Preview = React.lazy(() => import('./components/preview'));
const AdminLogin = React.lazy(() => import('./components/admin/admin-login'));
const AdminHomepage = React.lazy(() => import('./components/admin/admin-homepage'));

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
        <Router history={history}>
          <React.Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" exact render={props => <HomePage {...props} />} />
              <Route path="/preview/:url" exact render={props => <Preview {...props} />} />
              <ProtectedRoute path="/admin" exact component={AdminHomepage} />
              <Route path="/admin/login" exact render={props => <AdminLogin {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    );
  }
}
