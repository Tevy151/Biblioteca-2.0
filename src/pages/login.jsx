import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
  <div className='login-container'>
    <h3>Login Mockup Office 365</h3>
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
