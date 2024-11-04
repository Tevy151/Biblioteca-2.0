import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLoggedIn(true);
    props.setUsername(username);
    const redirectTo = location.state?.redirectTo || '/';
    navigate(redirectTo);
  };

  return (
    <div className='login-container'>
      
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className='login-field'>
          <label htmlFor='username'>Nombre de usuario:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='login-field'>
          <label htmlFor='password'>Contraseña:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
