import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store from 'store/index';
import axios from 'axios';

const { persistor, store } = Store();

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:8000'
// axios.defaults.baseURL = 'http://112.185.119.106:8000/';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
