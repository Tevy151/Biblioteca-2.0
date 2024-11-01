import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ loggedIn, username }) => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }

  return (
    <nav className='nav-bar'>
      <div className='nav-bar__left'>
        <NavLink className={navLinkClass} to='/'>
          Inicio
        </NavLink>
        <NavLink className={navLinkClass} to='/lightbulb'> 
          Ampolleta
        </NavLink>
      </div>
      <div className='nav-bar__right'>
        {loggedIn ? (
          <div className='nav-bar__welcome'>Bienvenido {username}</div>
        ) : (
          <NavLink className={`${navLinkClass({ isActive: false })} nav-bar__login`} to='/login'>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default NavBar
