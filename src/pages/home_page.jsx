import React from 'react'

export const HomePage = ({ loggedIn, username }) => {
  return (
    <>
      {loggedIn ? <div>Buenos Días {username}</div> : <div>Bienvenido a la Biblioteca USM 2.0</div>}
      {/*<p>¡Te damos la bienvenida a la Interfaz energética!</p>
      <p>En esta página encontraras una 💡 ampolleta que podrás encender y apagar con un botón</p>*/}
    </>
  )
}

export default HomePage
