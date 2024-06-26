import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
//render, screen, fireEvent: Funciones de la librería @testing-library/react para renderizar componentes y simular interacciones del usuario (clics, etc.).
//App: Importa el componente principal de la aplicación (App.js).

//test que funciona
test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Bienvenido a maplicación React/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('displays message on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Haz clic aquí/i);
  fireEvent.click(buttonElement);
  const messageElement = screen.getByText(/¡Has hecho clic en el botón!/i);
  expect(messageElement).toBeInTheDocument();
});

///Pruebas unitarias:
//La primera prueba (renders welcome message) verifica que el texto "Bienvenido a mi aplicación React" 
//se renderice correctamente en el componente App.
//La segunda prueba (displays message on button click) verifica que al hacer clic en un botón con el texto 
//"Haz clic aquí", se muestre un mensaje que diga "¡Has hecho clic en el botón!".

//test que no funciona, en los dos test le cambiamos el texto de comparacion
/*
test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Bienvenido a mi aplicación React/i);
  expect(welcomeElement).toBeInTheDocument();
});  

test('displays message on button click', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Haz clic aquí/i);
  fireEvent.click(buttonElement);
  const messageElement = screen.getByText(/¡Has hecho clic en el botón!/i);
  expect(messageElement).toBeInTheDocument();
});
*/