import React, { useState }  from 'react';
import '../componentes/Estilos.css';

import ImageModal from './ImageModal';

const PlanetCard = ({ result }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    // Función para abrir el modal
  const openModal = () => {
      setIsModalOpen(true);
  };
  
    // Función para cerrar el modal
  const closeModal = () => {
      setIsModalOpen(false);
  };

  if (!result || !result.data || result.data.length === 0) {
    return null; 
  }

  const { data } = result;
  const title = data[0].title;
  const imageUrl = result.links[0].href;
  const descripcion = data[0].description;
  const fecha = data[0].date_created;
  const credito = data[0].secondary_creator;

  return (
    <div className="planet-card container " >
      <div className="flip-box p-2" onClick={openModal}>
        <div className="flip-box-inner">
          <div className="flip-box-front" >
            <div className="container">
              <div>
                <img className="img-fluid imagen-galeria" src={imageUrl} alt={title} />
              </div>
              <div className="desc">
                <h6>{title}</h6>
                <p className='texto-credito fst-italic '>{fecha}</p>
              </div>
            </div>
          </div>

          <div className="flip-box-back modal-dialog modal-dialog-scrollable">
            <h4 className='pt-2'>Description</h4>
            <p className="texto-planetcards">{descripcion}</p>
            <p className='texto-credito fst-italic'><strong>Credit:</strong>  {credito}</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal imageUrl={imageUrl} title={title} onClose={closeModal}  isModalOpen={isModalOpen}/>
      )}
    </div>
  );
};

export default PlanetCard;

