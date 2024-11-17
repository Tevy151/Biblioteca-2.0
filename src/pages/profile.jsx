import React from 'react';

const Profile = ({ reservations }) => {

  return (
    <div>
      <h2>Mi Perfil</h2>
      <h3>Mis Reservas</h3>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>{reservation}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;