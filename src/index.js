import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore.dev';
import Root from './containers/Root';

// import './styles/index.scss';
import './styles/index.css';
import './styles/icons/style.css';

const store = configureStore();

render(
  <AppContainer>
    <Root
      store={store} history={history}
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./containers/Root', () => {
    const newConfigureStore = require('./store/configureStore');
    const newStore = newConfigureStore.configureStore();
    const newHistory = newConfigureStore.history;
    const RootContainer = require('./containers/Root').default;

    render(
      <AppContainer>
        <RootContainer
          store={newStore} history={newHistory}
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
