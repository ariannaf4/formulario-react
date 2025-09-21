import React from 'react';
import RegistroForm from './components/RegistroForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style-material.css';

function App() {
  return (
    <>
      <div className="background-gradient"></div>
      <div className="container">
        <div className="header">
          <div className="icon-container">
            <svg width="48" height="48" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#b4c0d7ff"/>
              <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 15C14.7 15 17.8 16.29 18 17V18H6V17.01C6.2 16.29 9.3 15 12 15M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4M12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z" fill="white"/>
            </svg>
          </div>
          <h1>Crear Cuenta</h1>
          <p className="subtitle">Únete a nuestra comunidad</p>
        </div>
        <RegistroForm />
      </div>
    </>
  );
}

export default App;
