import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('¡Has hecho clic en el botón!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a mi aplicación React</h1>
        <button onClick={handleClick}>Haz clic aquí</button>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
