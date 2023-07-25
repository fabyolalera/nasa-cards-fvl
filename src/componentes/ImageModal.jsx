//ImageModal.jsx
import React from 'react';
import '../componentes/Estilos.css';

const ImageModal = ({ imageUrl, title, onClose, isModalOpen }) => {
  return (
    
    <div className={`image-modal ${isModalOpen ? 'show' : ''}`}>
      <div className="image-modal-content">
        <span className="image-modal-close" onClick={onClose}>
          &times;
        </span>
        <div className="image-container">
          <img className="img-fluid" src={imageUrl} alt={title} />
        </div>
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default ImageModal;




