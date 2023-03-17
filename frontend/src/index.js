import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './main/App'
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Reducers from './main/Reducers.js';
import promise from 'redux-promise';
import  multi  from 'redux-multi';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk,promise)(configureStore)({ reducer: Reducers , devTools});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
