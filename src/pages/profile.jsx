import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ reservations, username, setLoggedIn }) => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    alert(`Se ha cerrado la sesión de ${username}`);
    reservations.length = 0;
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      <h2>Mi Perfil</h2>
      <h3>Mis Reservas</h3>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>{reservation}</li>
        ))}
      </ul>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;