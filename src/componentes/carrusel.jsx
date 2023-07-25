import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../componentes/Estilos.css';


const Carrusel=()=> {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
      const fetchPlanets = async () => {
        try {
          const response = await axios.get(
            'https://api.nasa.gov/planetary/apod?api_key=X6OtclFPe8JdqU6x6pjKfIH543xgBCYBewAU5Ylv'
          );
          setPlanets(response.data);
          console.log('response',response);
        } catch (error) {
          console.error('Error fetching planets:', error);
        }
      };
      console.log('planets',planets);
      
      fetchPlanets();
    }, []);

    return (

            <div id="carouselExampleDark" className="carrusel-main">
                
                <h2 className='pb-3 my-4'> Astronomy Picture of the Day</h2>
{/**
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
 */}
                <div className="container-fluid ">
                    <div className=" row  d-flex" >
                        <div className='col-md-7 imagen-carrusel'>
                            <img src={planets.hdurl} alt={planets.title} className="foto-portada d-block w-100"/>
                        </div>
                        <div className='col-md-5 explanacion'>
                            <div className="explanacion-div pt-1">
                                <h5>{planets.title} - {planets.date}</h5>
                                <p>{planets.explanation}</p>
                            </div>
                        </div>
                    </div>
{/** 
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="..." className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
*/}
                </div>
{/** 
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
*/}
            </div>
    );
}
        
export default Carrusel;