import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

//1
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

//2
import reducer from './reducers';

//3
const store = createStore(reducer, applyMiddleware(thunk));

//4
const rootElement = document.getElementById('root')

//5
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
