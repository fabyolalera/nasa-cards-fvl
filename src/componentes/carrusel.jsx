import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../componentes/Estilos.css';

const Carrusel = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=X6OtclFPe8JdqU6x6pjKfIH543xgBCYBewAU5Ylv'
        );
        setPlanets(response.data);
        console.log('response', response);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []); // Aquí agregamos el array de dependencias vacío para resolver el aviso

  return (
    <div id="carouselExampleDark" className="carrusel-main">
      <h2 className='pb-3 my-4'> Astronomy Picture of the Day</h2>
      <div className="container-fluid ">
        <div className="row  d-flex">
          <div className='col-md-7 imagen-carrusel'>
            <img src={planets.hdurl} alt={planets.title} className="foto-portada d-block w-100" />
          </div>
          <div className='col-md-5 explanacion'>
            <div className="explanacion-div pt-1">
              <h5>{planets.title} - {planets.date}</h5>
              <p>{planets.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;
