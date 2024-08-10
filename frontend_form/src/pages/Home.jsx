import React from 'react';
import CropInputForm from '../components/CropInputFrom';

function Home() {
  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to Crop Detection</h1>
        <p className="text-gray-700 mb-6">Input your current crop and conditions to get recommendations for future crops.</p>
        <CropInputForm />
      </div>
    </div>
  );
}

export default Home;
