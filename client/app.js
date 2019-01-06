import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import HomePage from './components/homepage';
import store from './store';
import history from './history';
import Preview from './components/preview';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/preview/:url" exact component={Preview} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
