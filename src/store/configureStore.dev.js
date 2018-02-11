import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// import { persistState } from 'redux-devtools';
// import DevTools from '../containers/DevTools';

// const enhancer = compose(
//   DevTools.instrument(),
//   persistState(
//     window.location.href.match(
//       /[?&]debug_session=([^&#]+)\b/
//     )
//   )
// );

export function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          middleware,
          thunk
        ),
      )
    );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
