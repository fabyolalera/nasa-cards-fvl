// PlanetCollection.jsx
import React, { useState } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import '../componentes/Estilos.css';


const PlanetCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`
      );
      setSearchResults(response.data.collection.items);
      setCurrentPage(1); 
    
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };
    // Calcular las tarjetas que se mostrarán en la página actual
    const cardsPerPage = 6;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = searchResults.slice(indexOfFirstCard, indexOfLastCard);
  
    // Funciones para manejar la paginación
    const nextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const prevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  

  return (
    <div className="planet-collection  mx-1">
      <div className="row pb-5 my-2 mx-0">
        <span className='linea my-4'></span>
        <div className="col-md-12 py-2 ">
          <h2 >NASA Image Library</h2>
        </div>
        <div className="col-md-12 py-2">
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

        </div>
      </div>

      <div className="row g-5 mx-0">
        {currentCards.map((result) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center" key={result.data[0].nasa_id}>
            
            <PlanetCard result={result} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-outline-dark boton me-2"
          onClick={prevPage}
          disabled={currentPage === 1} 
        >
          Previous
        </button>
        <button
          className="btn btn-outline-dark boton"
          onClick={nextPage}
          disabled={currentCards.length === 0} // Deshabilitar el botón si no hay más tarjetas para mostrar
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlanetCollection;