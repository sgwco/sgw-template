let history = null;

if (typeof document !== 'undefined') {
  const createBrowserHistory = require('history/createBrowserHistory').default;

  history = createBrowserHistory();
}

export default history;
