import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//fonts
import './assets/fonts/Caveat/static/Caveat-Bold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

