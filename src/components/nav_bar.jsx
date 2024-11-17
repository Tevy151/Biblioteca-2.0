import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [selectedCampus, setSelectedCampus] = useState('San Joaquin');
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  return (
    <nav className='nav-bar'>
      <div className='nav-bar__left'>
        <NavLink className={navLinkClass} to='/'>
          Biblioteca USM
        </NavLink>
        <span>Estas en el campus de </span>
        <select value={selectedCampus} onChange={handleCampusChange} className='campus-dropdown'>
          <option value='San Joaquin'>San Joaquin</option>
          <option value='Vitacura'>Vitacura</option>
          <option value='Viña del Mar'>Viña del Mar</option>
          <option value='Casa Central Valparaiso'>Casa Central Valparaiso</option>
        </select>
      </div>
      <div className='nav-bar__right'>
          {/*<div className='nav-bar__welcome'>Bienvenido {username}</div>*/}
          <NavLink className={navLinkClass} to='/profile'>
            Mi Perfil
          </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
