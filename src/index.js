import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from '/home/tanya/PhpstormProjects/untitled8/src/serviceWorker.js';
import { createStore } from 'redux';
import { rootReducers } from '/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/rootReducers.js';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
render(
  app,
  document.getElementById('root'),
);

serviceWorker.unregister();
