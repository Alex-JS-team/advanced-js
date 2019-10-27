import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from './reducers'
import App from './app'



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



store.subscribe(()=> console.log('subscribe', store.getState()));




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

