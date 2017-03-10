
/* ================================================================================
 * TRAM - Redux - Store
 * ================================================================================
 * Copyright (c) 2016-present Fabio Spampinato
 * Licensed under MIT (https://github.com/fabiospampinato/TRAM/blob/master/LICENSE)
 * ================================================================================ */

/* IMPORT */

import {createStore, applyMiddleware, compose} from 'redux';
import * as createLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import Apollo from 'api/apollo';
import Environment from 'modules/environment';
import Settings from 'modules/settings';
import reducers from './reducers';

/* CONFIGURE */

function configureStore ( history, initialState? ) {

  const enhancers: Function[] = [],
        middlewares = [
          routerMiddleware ( history ),
          Apollo.middleware ()
        ];

  if ( Environment.isDevelopment && Environment.isClient ) {

    middlewares.push ( createLogger () );

    if ( window.devToolsExtension ) enhancers.push ( window.devToolsExtension () );

  }

  const storeCreator = compose ( applyMiddleware ( ...middlewares ), ...enhancers )( createStore ),
        store = storeCreator ( reducers, initialState );

  if ( Settings.hotServer.enabled && module.hot ) {

    module.hot.accept ( './reducers', () => store.replaceReducer ( require ( './reducers' ) ) );

  }

  return store;

}

/* EXPORT */

export {configureStore};
