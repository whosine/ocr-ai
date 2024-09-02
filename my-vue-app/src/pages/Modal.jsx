import React, { useEffect, useRef, useState } from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  const modalRef = useRef();
  const [files, setFiles] = useState([]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-backdrop">
      <div className="modal" ref={modalRef}>
        <button onClick={onClose} className="modal-close-button">&times;</button>
        {children}
        <input type="file" onChange={handleFileChange} multiple />
        <div className="files-container">
          {files.map((file, index) => (
            <img 
              key={index} 
              src={URL.createObjectURL(file)} 
              alt={`Uploaded file ${index + 1}`} 
              className="uploaded-image" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
