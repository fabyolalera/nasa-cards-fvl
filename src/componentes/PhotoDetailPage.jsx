//PhotoDetailPage.jsx
import React, { useState } from 'react';
import '../componentes/Estilos.css';
import ImageModal from './ImageModal';

const PhotoDetailPage = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!image || !image.data || image.data.length === 0) {
    return null; 
  }

  const { data } = image;
  const title = data[0].title;
  const imageUrl = image.links[0].href;
  const description = data[0].description;
  const date = data[0].date_created;
  const credit = data[0].secondary_creator;

  return (
    <div className="planet-card container card-foto">

      <div className=" card-foto-dos p-2" onClick={openModal}>
        <div className="">
          <div className="">
            <div className="container">
              <div>
                <img className="img-fluid imagen-galeria" src={imageUrl} alt={title} />
              </div>
              <div >
                
                
              </div>
            </div>
          </div>

          
        </div>
      </div>
        <div className=" ">
            <h5 className="desc">{title}</h5>
            
            <p className="texto-planetcards-dos">{description}</p>
            
        </div>
      {isModalOpen && (
        <ImageModal imageUrl={imageUrl} title={title} onClose={closeModal} isModalOpen={isModalOpen} />
      )}
    </div>
  );
};

export default PhotoDetailPage;


