import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Vytvoření kořenového elementu React aplikace
const root = ReactDOM.createRoot(document.getElementById('root'));
// Vykreslení aplikace do DOM
root.render(
  // StrictMode pomáhá při vývoji odhalit potenciální problémy
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
