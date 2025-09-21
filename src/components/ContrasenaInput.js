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
        <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
        </svg>
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
        <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(v => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d={showPassword ? 
              "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" : 
              "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"}
            />
          </svg>
        </button>
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
