import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortadaFke from '../assets/PortadaFke.png';

const books = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Libro ${i + 1}`,
  available: Math.floor(Math.random() * 10) + 1,
  author: `Autor ${i + 1}`,
  publisher: `Editorial ${i + 1}`,
  description: `Esta es una descripcion de prueba para la realizacion de la pagina para el Libro ${i + 1} de la Editorial ${i + 1}`
})).concat({ id: 21, title: 'Libro 21', available: 0, author: 'Autor 21', publisher: 'Editorial 21', description: 'Esta es una descripcion de prueba para la realizacion de la pagina para el Libro 21 de la Editorial 21' });

const Reservas = ({ loggedIn }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOptionSelect = (option) => {
    if (!loggedIn) {
      navigate('/login', { state: { redirectTo: `/reservas/${option}` } });
    } else {
      setSelectedOption(option);
    }
  };

  const handleReserve = () => {
    if (selectedBook && selectedBook.available > 0) {
      alert(`Has reservado el ${selectedBook.title}`);
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
          <button onClick={() => setSelectedOption('')}>Volver</button>
          {selectedOption === 'salas' ? (
            <div>
              <h3>Salas Disponibles</h3>
              <ul>
                {Array.from({ length: 8 }, (_, i) => (
                  <li key={i}>Sala {i + 1}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h3>Libros Disponibles</h3>
              <div className='book-list'>
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
