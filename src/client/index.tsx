
import 'isomorphic-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
const { Router, browserHistory } = require('react-router');
import { syncHistoryWithStore } from 'react-router-redux';
const { ReduxAsyncConnect } = require('redux-connect');
import { configureStore } from '../redux/store';
import 'isomorphic-fetch';
import routes from '../routes';

const store: Redux.Store<any> = configureStore(
  browserHistory,
  window.__INITIAL_STATE__
);
const history = syncHistoryWithStore(browserHistory, store);

let root = document.getElementById('app');
if ( !root ) throw new Error ( 'Missing app root' );
ReactDOM.render(
  <Provider store={store} key="provider">
    <Router
      history={history}
      render={(props) =>
        <ReduxAsyncConnect {...props} />
      }
    >
      {routes}
    </Router>
  </Provider>,
  root
);
