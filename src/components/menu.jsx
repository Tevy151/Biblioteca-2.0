// components/Menu.js
import React from 'react';
import salaImage from '../assets/Captura.PNG';
import Libros from '../pages/libros';
import Reservas from '../pages/reservas';

const Menu = ({ selectedMenu, loggedIn }) => {
  switch (selectedMenu) {
    case 'salas':
      return (
        <div>
          <p>Mapa de la biblioteca</p>
          <img src={salaImage} alt="Imagen de Sala" className="salas-image" />
        </div>
      );
    case 'libros':
      return <Libros loggedIn={loggedIn} />;
    case 'reservas':
      return <Reservas loggedIn={loggedIn} />;
    default:
      return <div>Selecciona una opción del menú</div>;
  }
};

export default Menu;
