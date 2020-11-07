import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import {Provider} from 'react-redux';
import rootReducer from './redux/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


render(
  <React.StrictMode>
    <Provider store={store}>
    <App  />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
