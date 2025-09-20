import React from 'react';

const validarCorreo = (value) => {
  if (!value.trim()) return 'El correo es obligatorio';
  if (!/^\S+@\S+\.\S+$/.test(value)) return 'Formato de correo inválido';
  return '';
};

const CorreoInput = ({ correo, setCorreo, errorCorreo, setErrorCorreo }) => {
  // Usar el error y setter del padre si existen
  const [localError, setLocalError] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  const handleChange = (e) => {
    setCorreo(e.target.value);
    const err = validarCorreo(e.target.value);
    if (typeof setErrorCorreo === 'function') setErrorCorreo(err);
    setLocalError(err);
  };

  const handleBlur = () => {
    setTouched(true);
    const err = validarCorreo(correo);
    if (typeof setErrorCorreo === 'function') setErrorCorreo(err);
    setLocalError(err);
  };

  return (
    <div className="input-group">
  <div className={`input-container${localError && touched ? ' error' : touched && !localError && correo ? ' success' : ''}`}> 
        <span className="material-icons input-icon">email</span>
        <input
          type="email"
          id="correo"
          name="correo"
          value={correo}
          required
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
        />
        <label htmlFor="correo">Correo electrónico</label>
        <div className="input-line"></div>
      </div>
  {localError && touched && <div className="strength-text" style={{ color: 'var(--error-color)', marginTop: 4 }}>{localError}</div>}
    </div>
  );
};

export default CorreoInput;
