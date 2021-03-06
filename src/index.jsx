import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ConfigureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/App';

import './style/app.scss';

const store = ConfigureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
