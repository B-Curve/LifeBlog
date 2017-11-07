import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import { cookieSaver } from './reducers';

import Home from './components/home';

const persistedState = loadState();
const store = createStore(
  cookieSaver,
  persistedState
);
store.subscribe(() => {
  saveState({
    token: store.getState().token
  });
});

render(
  <Provider store={store}>
    <BrowserRouter history={hashHistory}>
      <Route path="*" component={Home} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
