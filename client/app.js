import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import store from './store';
import history from './history';
import { Loader } from './components/loader';

const HomePage = React.lazy(() => import('./components/homepage'));
const Preview = React.lazy(() => import('./components/preview'));
const AdminLogin = React.lazy(() => import('./components/admin/admin-login'));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <React.Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" exact render={props => <HomePage {...props} />} />
              <Route path="/preview/:url" exact render={props => <Preview {...props} />} />
              <Route path="/admin/login" exact render={props => <AdminLogin {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </Provider>
    );
  }
}
