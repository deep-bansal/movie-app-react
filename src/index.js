import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import movies from './reducers';
import { createStore } from 'redux';

const store = createStore(movies);
console.log('STORE',store);
console.log('STATE',store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
