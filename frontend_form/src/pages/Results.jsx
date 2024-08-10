import React from 'react';
import { useLocation } from 'react-router-dom';
import CropRecommendations from '../components/CropRecommendations';
import CropRotationSuggestions from '../components/CropRotationSuggestions';

function Results() {
  const { state } = useLocation();

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Crop Recommendations</h1>
        <CropRecommendations data={state} />
        <h2 className="text-2xl font-bold text-green-700 mt-6 mb-4">Crop Rotation Suggestions</h2>
        <CropRotationSuggestions data={state} />
      </div>
    </div>
  );
}

export default Results;
