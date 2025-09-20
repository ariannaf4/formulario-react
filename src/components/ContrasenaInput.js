import React from 'react';

const validarContrasena = (value) => {
  if (!value) return 'La contraseña es obligatoria';
  if (value.length < 8) return 'Mínimo 8 caracteres';
  return '';
};

const calcularFuerza = (password) => {
  let score = 0;
  if (password.length >= 8) score += 25;
  if (password.length >= 12) score += 25;
  if (/\d/.test(password)) score += 15;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 20;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 15;
  let feedback = 'Mínimo 8 caracteres';
  if (password.length < 8) feedback = 'Mínimo 8 caracteres';
  else if (score < 40) feedback = 'Contraseña débil';
  else if (score < 70) feedback = 'Contraseña media';
  else feedback = 'Contraseña fuerte';
  return { score, feedback };
};

const ContrasenaInput = ({ contrasena, setContrasena, errorContrasena, setErrorContrasena }) => {
  // Usar el error y setter del padre si existen
  const [localError, setLocalError] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordStrength, setPasswordStrength] = React.useState({ score: 0, feedback: 'Mínimo 8 caracteres' });

  const handleChange = (e) => {
    setContrasena(e.target.value);
    const err = validarContrasena(e.target.value);
    if (typeof setErrorContrasena === 'function') setErrorContrasena(err);
    setLocalError(err);
    setPasswordStrength(calcularFuerza(e.target.value));
  };

  const handleBlur = () => {
    setTouched(true);
    const err = validarContrasena(contrasena);
    if (typeof setErrorContrasena === 'function') setErrorContrasena(err);
    setLocalError(err);
  };

  return (
    <div className="input-group">
  <div className={`input-container${localError && touched ? ' error' : touched && !localError && contrasena ? ' success' : ''}`}> 
        <span className="material-icons input-icon">lock</span>
        <input
          type={showPassword ? 'text' : 'password'}
          id="contrasena"
          name="contrasena"
          value={contrasena}
          required
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
        />
        <label htmlFor="contrasena">Contraseña</label>
        <div className="input-line"></div>
        <span
          className="material-icons toggle-password"
          onClick={() => setShowPassword(v => !v)}
          style={{ cursor: 'pointer' }}
        >{showPassword ? 'visibility' : 'visibility_off'}</span>
      </div>
      <div className={`password-strength${contrasena ? ' active' : ''}`} id="passwordStrength">
        <div className="strength-bar">
          <div
            className={`strength-fill${passwordStrength.score < 40 ? ' weak' : passwordStrength.score < 70 ? ' medium' : ' strong'}`}
            style={{ width: `${passwordStrength.score}%` }}
          ></div>
        </div>
        <span className="strength-text">{passwordStrength.feedback}</span>
      </div>
  {localError && touched && <div className="strength-text" style={{ color: 'var(--error-color)', marginTop: 4 }}>{localError}</div>}
    </div>
  );
};

export default ContrasenaInput;
