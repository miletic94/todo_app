import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <h1>To Do App</h1>
    <p>This is simplified To Do App, creted in order to practice React Hooks</p>
    <p>Enter task in a box bellow and press ENTER</p>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
