import React from 'react';

const Profile = ({ reservations, setReservations }) => {

  return (
    <div>
      <h2>Mi Perfil</h2>
      <h3>Mis Reservas</h3>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>{reservation}
            <button onClick={() => {
              alert(`Haz eliminado la reserva ${reservation}`);
              setReservations(
                reservations.filter(a =>
                  a !== reservation
                )
              );
            }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;