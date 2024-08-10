import React from 'react';
import CropInputForm from '../components/CropInputFrom';

function Calculate() {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 mx-auto">
        <h1 className="text-3xl text-center font-bold cen text-green-700 mb-6">Welcome to Crop Detection</h1>
        <CropInputForm />
      </div>
    </div>
  );
}

export default Calculate;
