import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { appReducer, appInitialState } from './shared/state'
import { ConfigureStore } from './shared/state/types';
import { configureStore } from './store'
import App from './App';

import './index.css';

const store: ConfigureStore = configureStore(appReducer, appInitialState, {});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
