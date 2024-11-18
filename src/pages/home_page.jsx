import React, { useState, useEffect } from 'react';
import Noticia1 from '../assets/Noticia1-2.png';
import Noticia2 from '../assets/Noticia2-2.png';
import Noticia3 from '../assets/Noticia3-2.png';

const photos = [
  `${Noticia1}?${new Date().getTime()}`, 
  `${Noticia2}?${new Date().getTime()}`, 
  `${Noticia3}?${new Date().getTime()}`
];

const captions = [
  "Sistema de almacenamiento de energía gana Premio Nacional de Innovación Avonni 2024",
  "Proyectos ganadores de fondos de Vinculación con el Medio USM beneficiarán a escuelas rurales",
  "Alumno con discapacidad desarrolla instrumento para mejorar la experiencia educativa de personas ciegas"
];

const getOpeningHours = () => {
  const today = new Date();
  const day = today.getDay();
  if (day >= 1 && day <= 4) {
    return "08:00 – 20:00";
  } else if (day === 5) {
    return "08:00 – 19:00";
  } else {
    return "Cerrado";
  }
};

const isOpen = (currentTime, openingHours) => {
  if (openingHours === "Cerrado") return false;
  const [open, close] = openingHours.split(" – ");
  const [openHour, openMinute] = open.split(":").map(Number);
  const [closeHour, closeMinute] = close.split(":").map(Number);
  const openTime = new Date(currentTime);
  openTime.setHours(openHour, openMinute, 0, 0);
  const closeTime = new Date(currentTime);
  closeTime.setHours(closeHour, closeMinute, 0, 0);
  return currentTime >= openTime && currentTime <= closeTime;
};

export const HomePage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [connectedUsers, setConnectedUsers] = useState(0);
  const [reservedBooks, setReservedBooks] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      setCurrentTime(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulación de datos de usuarios conectados y libros reservados
    setConnectedUsers(Math.floor(Math.random() * 100));
    setReservedBooks(Math.floor(Math.random() * 50));
  }, []);

  const today = new Date();
  const openingHours = getOpeningHours();
  const openStatus = isOpen(currentTime, openingHours) ? "Abierto" : "Cerrado";

  return (
    <div className="layout">
      <div className="layout__main">
        <div className="layout__container">
          <div className="welcome-text">Bienvenido a la Biblioteca USM 2.0</div>
          <div className="photo-slider">
            <img src={photos[currentPhotoIndex]} alt={`Foto ${currentPhotoIndex + 1}`} className="slider-image" />
            <div className="texto-superpuesto">
              <p>{captions[currentPhotoIndex]}</p>
            </div>
          </div>
          <div className="info-table">
            <table>
              <tbody>
                <tr className="banner-gray">
                  <td>Hora de Apertura</td>
                </tr>
                <tr className="sidebar-gray">
                  <td>{today.toLocaleDateString()}</td>
                </tr>
                <tr className="banner-gray">
                  <td>{openingHours}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="footer">
            <div className="clock-container">
              <div className="clock">
                <div className="clock__time">{currentTime.toLocaleTimeString()}</div>
                <div className="clock__status">{openStatus}</div>
              </div>
            </div>
            <div className="stats-container">
              <div className="stats-item">
                <div className="stats-item__label">Usuarios Conectados</div>
                <div className="stats-item__value">{connectedUsers}</div>
              </div>
              <div className="stats-item">
                <div className="stats-item__label">Libros Reservados Hoy</div>
                <div className="stats-item__value">{reservedBooks}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
