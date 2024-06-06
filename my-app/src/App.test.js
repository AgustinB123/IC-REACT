import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

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
