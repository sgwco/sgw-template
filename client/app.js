import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { get } from '../constants/utils';
import HomePage from './components/homepage';
import Preview from './components/preview';
import AdminLogin from './components/admin/admin-login';
import AdminHomepage from './components/admin/admin-homepage';
import AdminWebTemplate from './components/admin/admin-web-template';

// const HomePage = Loadable({
//   loader: () => import('./components/homepage'),
//   loading: Loader,
// });

// const Preview = Loadable({
//   loader: () => import('./components/preview'),
//   loading: Loader,
// });

// const AdminLogin = Loadable({
//   loader: () => import('./components/admin/admin-login'),
//   loading: Loader,
// });

// const AdminHomepage = Loadable({
//   loader: () => import('./components/admin/admin-homepage'),
//   loading: Loader,
// });

// const AdminWebTemplate = Loadable({
//   loader: () => import('./components/admin/admin-web-template'),
//   loading: Loader,
// });

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // const state = store.getState();
      const state = {};
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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/preview/:url" exact component={Preview} />
        <ProtectedRoute path="/admin" exact component={AdminHomepage} />
        <Route path="/admin/login" exact component={AdminLogin} />
        <ProtectedRoute path="/admin/web-template" exact component={AdminWebTemplate} />
      </Switch>
    );
  }
}
