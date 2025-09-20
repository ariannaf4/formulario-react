import React from 'react';
import RegistroForm from './components/RegistroForm';
import './App.css';
import './style-material.css';

function App() {
  return (
    <>
      <div className="background-gradient"></div>
      <div className="container">
        <div className="header">
          <div className="icon-container">
            <span className="material-icons">person_add</span>
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
