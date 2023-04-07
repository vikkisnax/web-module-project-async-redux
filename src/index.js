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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk ) ));

//4a
const rootElement = document.getElementById('root')

//4b
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
