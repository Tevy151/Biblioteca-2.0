import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home_page';
import Libros from '../pages/libros';
import Profile from '../pages/profile';
import Reservas from '../pages/reservas'; // Ensure this import
import Captura from '../assets/Captura.png'; // Ensure consistent casing

import NavBar from './nav_bar';
import Sidebar from './side-bar';

const Layout = () => {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div className='layout'>
      <NavBar />
      <div className='layout__main'>
        <Sidebar onSelectMenu={setSelectedMenu} />
        <div className='layout__container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<Profile reservations={reservations} setReservations={setReservations} />} />
            <Route path='/reservas' element={<Reservas addReservation={addReservation} />} />
            <Route path='/libros' element={<Libros />} />
            <Route path='/salas' element={<div><p>Mapa de la biblioteca</p><img src={Captura} alt="Imagen de Sala" className="salas-image" /></div>} />
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