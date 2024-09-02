import React from 'react';
import { useLocation } from 'react-router-dom';
import './Collection.css'; // Ensure this file is created and styled as needed

const Collection = () => {
  const location = useLocation();
  const { collection } = location.state || {}; // Retrieve the collection data from state

  if (!collection) {
    return <div>No collection data available</div>;
  }

  return (
    <div className="collection-detail-container">
      <div className="card-container">
        <div className="data-card">
          <h1 className="collection-title">{collection.collectionName}</h1>
          <div className="data-content">
            <p><strong>Name:</strong> {collection.name}</p>
            <p><strong>Collection Name:</strong> {collection.collectionName}</p>
            <p><strong>Title:</strong> {collection.title}</p>
          </div>
        </div>
        <div className="image-card">
          {collection.uploadedFiles && collection.uploadedFiles.length > 0 ? (
            collection.uploadedFiles.map((file, index) => (
              <img 
                key={index} 
                src={file} 
                alt={`Uploaded file ${index + 1}`} 
                className="uploaded-image" 
              />
            ))
          ) : (
            <p>No files uploaded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
