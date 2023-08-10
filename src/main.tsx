import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './style.css';

//AKi dibujo mi arbo lde reacct, Main es el primer nodo del arbol
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
