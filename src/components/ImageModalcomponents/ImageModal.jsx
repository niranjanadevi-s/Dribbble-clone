
import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="image-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={image} alt="Full view" className="full-image" />
      </div>
    </div>
  );
};

export default ImageModal;