import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewCollection.css';

const ViewCollection = () => {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios.get('/api/collections');
      setCollections(response.data);
    };
    fetchCollections();
  }, []);

  const handleClick = (collection) => {
    navigate('/collection', { state: { collection } });
  };

  return (
    <div className="view-container">
      <h1>View Collections</h1>
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card" onClick={() => handleClick(collection)}>
            <h2>{collection.collectionName}</h2>
            <p>Name: {collection.name}</p>
            <p>Title: {collection.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCollection;
