import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './startup/router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
