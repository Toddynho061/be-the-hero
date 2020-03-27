import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Esta renderizando (colocando em tela) o 'App' colocando em dentro de ('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

