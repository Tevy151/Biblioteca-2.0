import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ loggedIn }) => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink className={navLinkClass} to='/'>
        Inicio
      </NavLink>
      <NavLink className={navLinkClass} to='/lightbulb'> 
        Ampolleta
      </NavLink>
      {loggedIn ? '' : <NavLink className={`${navLinkClass({ isActive: false })} nav-bar__login`} to='/login'>Login</NavLink>}
    </nav>
  )
}

export default NavBar
