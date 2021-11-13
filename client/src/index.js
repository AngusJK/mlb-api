import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import App from './App';
import PlayerCards from './PlayerCards';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <PlayerCards />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
