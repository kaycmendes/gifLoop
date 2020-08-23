import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
