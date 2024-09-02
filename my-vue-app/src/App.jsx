import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateCollection from './pages/CreateCollection';
import ViewCollection from './pages/ViewCollection';
import Collection from './pages/Collection'; // New import
import './App.css';

function App() {
  const [collections, setCollections] = useState([]);
  const location = useLocation();

  const addCollection = (collectionData) => {
    setCollections([...collections, collectionData]);
  };

  return (
    <>
      {/* Navbar will only be visible on the home page */}
      {location.pathname === '/' && <Navbar />}

      <div className="container">
        <Routes>
          <Route path="/" element={<Home addCollection={addCollection} />} />
          <Route path="/create" element={<CreateCollection collections={collections} addCollection={addCollection} />} />
          <Route path="/view" element={<ViewCollection />} />
          <Route path="/collection" element={<Collection />} /> {/* New route */}
        </Routes>
      </div>
    </>
  );
}

export default App;
