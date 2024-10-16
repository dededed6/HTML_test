import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';
});