import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';

import Home from './components/home';

render(
  <BrowserRouter history={hashHistory}>
    <Route path="*" component={Home} />
  </BrowserRouter>,
  document.getElementById('app')
);
