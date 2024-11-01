import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login'; 
import HomePage from '../pages/home_page';
import LightbulbPage from '../pages/lightbulb_page';
import Libros from '../pages/libros';

import NavBar from './nav_bar';
import Sidebar from './side-bar';
import Menu from './menu';

const Layout = () => {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <div className='layout'>
      <NavBar loggedIn={loggedIn} username={username} />
      <div className='layout__main'>
        <Sidebar onSelectMenu={setSelectedMenu} />
        <div className='layout__container'>
          <Menu selectedMenu={selectedMenu} loggedIn={loggedIn} />
          <Routes>
            <Route path='/' element={<HomePage loggedIn={loggedIn} username={username} />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
