import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App'



ReactDOM.render(
      <App />,
  document.getElementById('root')
);


serviceWorker.unregister();
