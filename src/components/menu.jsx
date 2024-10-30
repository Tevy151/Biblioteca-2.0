// components/Menu.js
import React from 'react';

const Menu = ({ selectedMenu }) => {
  switch (selectedMenu) {
    case 'salas':
      return <div>Contenido de Salas</div>;
    case 'libros':
      return <div>Contenido de Libros</div>;
    default:
      return <div>Selecciona una opción del menú</div>;
  }
};

export default Menu;
