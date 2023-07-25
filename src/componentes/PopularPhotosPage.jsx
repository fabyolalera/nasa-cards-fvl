//PopularPhotosPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import PlanetCard from './PlanetCard';
import PhotoDetailPage from './PhotoDetailPage';
import '../componentes/Estilos.css';

const PopularPhotosPage = () => {
  const [popularImages, setPopularImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPopularImages();
  }, []);

  const fetchPopularImages = async () => {
    try {
      const response = await axios.get(
        'https://images-assets.nasa.gov/popular.json'
      );
      setPopularImages(response.data.collection.items);
    } catch (error) {
      console.error('Error fetching popular images:', error);
    }
  };

  // Calcular las tarjetas que se mostrarán en la página actual
  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = popularImages.slice(indexOfFirstCard, indexOfLastCard);

  // Funciones para manejar la paginación
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="planet-collection  mx-1">
      <div className="row pb-5 my-2 mx-0 ">
        <span className='linea my-4'></span>
        <div className="col-md-12 py-2">
          <h3 className='py-4'>NASA Image Popular</h3>
        </div>
      </div>

      <div className="row  g-5 mx-0">
        {currentCards.map((image) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-center"
            key={image.data[0].nasa_id}
          >
           
            <PhotoDetailPage image={image} />
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
          disabled={currentCards.length === 0} 
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularPhotosPage;
