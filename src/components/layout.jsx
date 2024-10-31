// components/Layout.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login'; 
import HomePage from '../pages/home_page';
import LightbulbPage from '../pages/lightbulb_page';

import NavBar from './nav_bar';
import Sidebar from './side-bar'; // Asegúrate de que el nombre sea correcto
import Menu from './menu'; // Importa el nuevo componente Menu

const Layout = () => {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar loggedIn={loggedIn} />
        <div className='layout__main'>
          <Sidebar onSelectMenu={setSelectedMenu} />
          <div className='layout__container'>
            <Menu selectedMenu={selectedMenu} />
            <Routes>
              <Route path='/' element={<HomePage loggedIn={loggedIn} username={username} />} />
              <Route path='/lightbulb' element={<LightbulbPage />} />
              <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
