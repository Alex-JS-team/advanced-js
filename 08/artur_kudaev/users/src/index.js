import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';
import App from './app'
import { syncHistoryWithStore } from 'react-router-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk'
import { createHashHistory } from 'history';
import { Router } from 'react-router'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(createHashHistory(), store);

store.subscribe(()=> console.log('subscribe', store.getState()));

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>, document.getElementById('root'));