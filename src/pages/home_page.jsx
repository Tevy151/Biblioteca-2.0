import React from 'react';

export const HomePage = ({ loggedIn, username }) => {
  return (
    <>
      {loggedIn ? <div>Buenos Días {username}</div> : <div>Bienvenido a la Biblioteca USM 2.0</div>}
    </>
  );
};

export default HomePage;
