import React, { useState, useEffect } from 'react';
import CorreoInput from './CorreoInput';
import ContrasenaInput from './ContrasenaInput';
import Botones from './Botones';

const RegistroForm = () => {
  // Estados locales
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorCorreo, setErrorCorreo] = useState('');
  const [errorContrasena, setErrorContrasena] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, feedback: 'Mínimo 8 caracteres' });
  const [showToast, setShowToast] = useState(null);
  const [touchedNombre, setTouchedNombre] = useState(false);
  // Toast local
  // (ya definido arriba)
  // Usar los errores y setters del padre
  // (ya definido arriba)
  // Recibir los errores y setters del padre
  // (comentado, ya no se usa)

  const validarNombre = (value) => {
    if (!value.trim()) return 'El nombre es obligatorio';
    if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
    return '';
  };

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
    setErrorNombre(validarNombre(e.target.value));
  };

  const handleBlurNombre = () => {
    setTouchedNombre(true);
    setErrorNombre(validarNombre(nombre));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación final
    if (!errorNombre && !errorCorreo && !errorContrasena && nombre && correo && contrasena) {
      setShowToast({ type: 'success', message: '¡Registro exitoso! Bienvenido a nuestra comunidad.' });
      // Limpiar campos después de mostrar el toast
    }
  };

  // Toast timeout y limpieza de campos
  useEffect(() => {
    if (showToast && showToast.type === 'success') {
      const timer = setTimeout(() => {
        setShowToast(null);
        setNombre(''); setCorreo(''); setContrasena('');
        setErrorNombre(''); setErrorCorreo(''); setErrorContrasena('');
        setShowPassword(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (showToast) {
      const timer = setTimeout(() => setShowToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-group">
        <div className={`input-container${typeof errorNombre !== 'undefined' && errorNombre && touchedNombre ? ' error' : touchedNombre && typeof errorNombre !== 'undefined' && !errorNombre && nombre ? ' success' : ''}`}> 
          <span className="material-icons input-icon">person</span>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            required
            autoComplete="off"
            onChange={handleChangeNombre}
            onBlur={handleBlurNombre}
            placeholder=" "
          />
          <label htmlFor="nombre">Nombre completo</label>
          <div className="input-line"></div>
        </div>
        {typeof errorNombre !== 'undefined' && errorNombre && touchedNombre && <div className="strength-text" style={{ color: 'var(--error-color)', marginTop: 4 }}>{errorNombre}</div>}
  </div>
  <CorreoInput correo={correo} setCorreo={setCorreo} errorCorreo={errorCorreo} setErrorCorreo={setErrorCorreo} />
  <ContrasenaInput contrasena={contrasena} setContrasena={setContrasena} errorContrasena={errorContrasena} setErrorContrasena={setErrorContrasena} passwordStrength={passwordStrength} setPasswordStrength={setPasswordStrength} showPassword={showPassword} setShowPassword={setShowPassword} />
      <Botones />
    </form>
    {/* Toast */}
    {showToast && (
      <div className={`toast toast-${showToast.type}`}
        style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 10000, background: '#1976D2', color: 'white', padding: '16px 32px', borderRadius: '8px', fontSize: '1rem', display: 'block' }}>
        <span className="material-icons" style={{ marginRight: '8px' }}>
          {showToast.type === 'success' ? 'check_circle' : showToast.type === 'error' ? 'error' : showToast.type === 'warning' ? 'warning' : 'info'}
        </span>
        <span>{showToast.message}</span>
      </div>
    )}
    </>
  );
};

export default RegistroForm;
