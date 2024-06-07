import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Este archivo index.js es el punto de entrada de tu aplicación React. Se encarga de importar las librerías necesarias, 
//definir el componente principal, y renderizarlo en el navegador utilizando el elemento HTML con id "root".
// La medición de rendimiento es una funcionalidad opcional que puedes activar si lo necesitas.


reportWebVitals();
