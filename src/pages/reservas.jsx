import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortadaFke from '../assets/PortadaFke.png';
import Captura from '../assets/Captura.png'; // Ensure consistent casing

const books = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Libro ${i + 1}`,
  available: Math.floor(Math.random() * 10) + 1,
  author: `Autor ${i + 1}`,
  publisher: `Editorial ${i + 1}`,
  description: `Esta es una descripcion de prueba para la realizacion de la pagina para el Libro ${i + 1} de la Editorial ${i + 1}`
})).concat([{ id: 21, title: 'Libro 21', available: 0, author: 'Autor 21', publisher: 'Editorial 21', description: 'Esta es una descripcion de prueba para la realizacion de la pagina para el Libro 21 de la Editorial 21' }]);

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const startHour = 8 + Math.floor(i / 2);
  const startMinute = i % 2 === 0 ? '00' : '30';
  const endHour = startMinute === '00' ? startHour : startHour + 1;
  const endMinute = startMinute === '00' ? '30' : '00';
  return `${startHour}:${startMinute} a ${endHour}:${endMinute}`;
});

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const generateOccupiedSlots = () => {
  const occupiedSlots = {};
  for (let i = 1; i <= 8; i++) {
    occupiedSlots[`Sala ${i}`] = {};
    daysOfWeek.forEach(day => {
      const numOccupied = Math.floor(Math.random() * 3) + 1;
      const slots = [];
      while (slots.length < numOccupied) {
        const slot = timeSlots[Math.floor(Math.random() * timeSlots.length)];
        if (!slots.includes(slot)) {
          slots.push(slot);
        }
      }
      occupiedSlots[`Sala ${i}`][day] = slots;
    });
  }
  return occupiedSlots;
};

const occupiedSlots = generateOccupiedSlots();

const Reservas = ({ loggedIn, addReservation }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleOptionSelect = (option) => {
    !loggedIn ? navigate('/login', { state: { redirectTo: `/reservas/${option}` } }) : setSelectedOption(option);
  };

  const handleReserve = () => {
    if (selectedBook && selectedBook.available > 0) {
      alert(`Has reservado el ${selectedBook.title}`);
      addReservation(`Libro: ${selectedBook.title}`);
    }
  };

  const handleReserveRoom = () => {
    if (selectedRoom && selectedTimes.length > 0) {
      alert(`Has reservado la ${selectedRoom} el ${selectedDay} en los horarios: ${selectedTimes.join(', ')}`);
      addReservation(`Sala: ${selectedRoom} el ${selectedDay} en los horarios: ${selectedTimes.join(', ')}`);
    }
  };

  const handleTimeSelect = (time) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter(t => t !== time));
    } else if (selectedTimes.length < 3) {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  return (
    <div>
      <h2>Reservas</h2>
      {!selectedOption ? (
        <div>
          <button onClick={() => handleOptionSelect('salas')}>Reservar Sala</button>
          <button onClick={() => handleOptionSelect('libros')}>Reservar Libro</button>
        </div>
      ) : (
        <div>
          {selectedRoom ? (
            <button onClick={() => setSelectedRoom(null)}>Seleccionar otra sala</button>
          ) : (
            <button onClick={() => setSelectedOption('')}>Volver</button>
          )}
          {selectedOption === 'salas' ? (
            <div>
              <h3>Salas Disponibles</h3>
              {!selectedRoom ? (
                <ul className="room-list">
                  {Array.from({ length: 8 }, (_, i) => (
                    <li key={i} className="room-item" onClick={() => setSelectedRoom(`Sala ${i + 1}`)}>
                      Sala {i + 1}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="reservas-content">
  <div className="reservas-detalles">
    <h4>{selectedRoom}</h4>
    <div className="day-selection">
      <h5>Selecciona el día:</h5>
      {daysOfWeek.map(day => (
        <button
          key={day}
          className={`day-button ${selectedDay === day ? 'selected' : ''}`}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
    <div className="time-selection-container">
      <p className="time-selection-title">Selecciona los horarios (máximo 3 horarios):</p>
      <div className="time-slot-slider">
        <div className="time-slots-slider">
          {timeSlots.map((time, index) => {
            const [startTime] = time.split(' a ');
            return (
              <div className="time-slot-container" key={time}>
                <span className="time-label">{startTime}</span>
                <button
                  className={`time-slot ${selectedTimes.includes(time) ? 'selected' : ''} ${occupiedSlots[selectedRoom][selectedDay]?.includes(time) ? 'occupied' : ''}`}
                  onClick={() => !occupiedSlots[selectedRoom][selectedDay]?.includes(time) && handleTimeSelect(time)}
                  disabled={occupiedSlots[selectedRoom][selectedDay]?.includes(time)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {selectedTimes.length > 0 && (
        <button onClick={handleReserveRoom}>Reservar</button>
      )}
    </div>
  </div>
  <div className="imagensala">
    <img src={Captura} alt="Mapa de la sala" className="salas-image-small" />
  </div>
</div>

              )}
            </div>
          ) : (
            <div className='book-container'>
              
              <div className='book-list'>
              <h3>Libros Disponibles</h3>
                {books.map((book) => (
                  <div
                    key={book.id}
                    className='book-item'
                    onClick={() => setSelectedBook(book)}
                  >
                    {book.title}
                  </div>
                ))}
              </div>
              {selectedBook && (
                <div className='book-details'>
                  <img src={PortadaFke} alt='Portada del libro' className='book-cover' />
                  <p>{selectedBook.title}</p>
                  <p>Autor: {selectedBook.author}</p>
                  <p>Editorial: {selectedBook.publisher}</p>
                  <p>Descripcion: {selectedBook.description}</p>
                  <p>Disponibles: {selectedBook.available}</p>
                  {loggedIn && selectedBook.available > 0 && (
                    <button onClick={handleReserve}>Reservar</button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Reservas;
