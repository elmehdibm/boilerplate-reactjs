import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from "./routes";
import thestore from './configureStore';

ReactDOM.render(
  <Provider store={thestore}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
