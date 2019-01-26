import React from 'react';
import { render } from 'react-dom';
import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';

render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
