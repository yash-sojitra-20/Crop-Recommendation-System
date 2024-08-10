// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FarmerGuide from './pages/FarmerGuide';
import CropPredictionForm from './components/CropInputFrom';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<CropPredictionForm />} />
        <Route path="/FarmerGuide" element={<FarmerGuide/>}/>
      </Routes>
    </div>
  );
}

export default App;
