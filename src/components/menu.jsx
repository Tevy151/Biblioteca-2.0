// components/Menu.js
import React from 'react';
import salaImage from '../assets/Captura.PNG';

const Menu = ({ selectedMenu }) => {
  switch (selectedMenu) {
    case 'salas':
      return (
        <div>
          <p>Contenido de Salas</p>
          <img src={salaImage} alt="Imagen de Sala" className="salas-image" />
        </div>
      );
    case 'libros':
      return <div>Contenido de Libros</div>;
    default:
      return <div>Selecciona una opción del menú</div>;
  }
};

export default Menu;
