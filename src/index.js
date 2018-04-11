import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSageMiddleWare from 'redux-saga';

import rootReducer from './Reducers';
import App from './Components/App/App';
import './reset.css';
import './index.css';

const sageMiddleware = createSageMiddleWare();
const devTools = 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(sageMiddleware)
);

const fullSend = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(fullSend, document.getElementById('root'));
