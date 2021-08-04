import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './containers/App';
import {HashRouter} from 'react-router-dom';
import {store} from './state/Store';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App store={store} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
