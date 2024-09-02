import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCollection.css';
import Modal from './Modal';
import { Link } from 'react-router-dom'; // Import Link

const CreateCollection = ({ collections, addCollection }) => {
  const [showModal, setShowModal] = useState(false);
  const [collectionData, setCollectionData] = useState({ name: '', collectionName: '', title: '' });
  const navigate = useNavigate();

  const handleUpload = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    setCollectionData({ ...collectionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addCollection(collectionData); // Add the new collection
    setCollectionData({ name: '', collectionName: '', title: '' }); // Clear the input fields
    setShowModal(false); // Close the modal
    navigate('/create'); // Navigate to the Create page
  };

  return (
    <div className="create-container">
      <div className="header">
        <h1>Create Collection</h1>
        <button onClick={handleUpload} className="button_2">Upload</button>
      </div>
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <Link 
            key={index} 
            to={`/collection`} 
            state={{ collection }} // Pass collection data via state
            className="collection-card"
          >
            <h2>{collection.collectionName}</h2>
            <p>Name: {collection.name}</p>
            <p>Title: {collection.title}</p>
          </Link>
        ))}
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Upload Collection</h2>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={collectionData.name} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="collectionName" 
            placeholder="Collection Name" 
            value={collectionData.collectionName} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={collectionData.title} 
            onChange={handleChange} 
          />
          <button onClick={handleSubmit} className="button">Submit</button>
        </Modal>
      )}
    </div>
  );
};

export default CreateCollection;
