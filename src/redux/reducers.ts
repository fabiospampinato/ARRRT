
/* IMPORT */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Client from 'api/client';
import {todoReducer} from './modules/todo';

/* REDUCERS */

let reducers = combineReducers ({
  routing: routerReducer,
  todo: todoReducer,
  apollo: Client.reducer ()
});

/* EXPORT */

export default reducers;
