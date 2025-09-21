import React from 'react';

const validarCorreo = (value) => {
  if (!value.trim()) return 'El correo es obligatorio';
  if (!/^\S+@\S+\.\S+$/.test(value)) return 'Formato de correo inválido';
  return '';
};

const CorreoInput = ({ correo, setCorreo, errorCorreo, setErrorCorreo }) => {
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
        <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
        </svg>
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
          className="form-control"
        />
        <label htmlFor="correo">Correo electrónico</label>
        <div className="input-line"></div>
      </div>
  {localError && touched && <div className="strength-text" style={{ color: 'var(--error-color)', marginTop: 4 }}>{localError}</div>}
    </div>
  );
};

export default CorreoInput;
