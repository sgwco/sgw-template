import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { store } from './store';
import { get } from '../constants/utils';

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "homepage" */ './components/homepage')
);
const Preview = React.lazy(() => import(/* webpackChunkName: "preview" */ './components/preview'));
const AdminLogin = React.lazy(() =>
  import(/* webpackChunkName: "admin_login" */ './components/admin/admin-login')
);
const AdminHomepage = React.lazy(() =>
  import(/* webpackChunkName: "admin_homepage" */ './components/admin/admin-homepage')
);
const AdminWebTemplate = React.lazy(() =>
  import(/* webpackChunkName: "admin_web_template" */ './components/admin/admin-web-template')
);

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
      <Switch>
        <Route path="/" exact render={props => <HomePage {...props} />} />
        <Route path="/preview/:url" exact render={props => <Preview {...props} />} />
        <ProtectedRoute path="/admin" exact component={AdminHomepage} />
        <Route path="/admin/login" exact render={props => <AdminLogin {...props} />} />
        <ProtectedRoute path="/admin/web-template" exact component={AdminWebTemplate} />
      </Switch>
    );
  }
}
