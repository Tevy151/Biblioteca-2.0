import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onSelectMenu }) => {
  const sidebarLinkClass = ({ isActive }) => {
    const classes = ['sidebar__link'];
    if (isActive) classes.push('sidebar__link--active');
    return classes.join(' ');
  };

  return (
    <aside className='sidebar'>
      <NavLink 
        className={sidebarLinkClass} 
        to='/reservas' 
        onClick={() => onSelectMenu('reservas')}
      >
        <div className='sidebar__item'>
          <span>Reservas</span>
        </div>
      </NavLink>
      <NavLink 
        className={sidebarLinkClass} 
        to='/salas' 
        onClick={() => onSelectMenu('salas')}
      >
        <div className='sidebar__item'>
          <span>Mapa de la biblioteca</span>
        </div>
      </NavLink>
      <NavLink 
        className={sidebarLinkClass} 
        to='/libros' 
        onClick={() => onSelectMenu('libros')}
      >
        <div className='sidebar__item'>
          <span>Libros</span>
        </div>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
