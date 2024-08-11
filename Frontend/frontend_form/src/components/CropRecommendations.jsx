import React from 'react';

function CropRecommendations({ data }) {
  const recommendations = ['Wheat', 'Maize', 'Barley'];

  return (
    <ul className="list-disc pl-5 text-gray-700">
      {recommendations.map((crop, index) => (
        <li key={index} className="mb-2">{crop}</li>
      ))}
    </ul>
  );
}

export default CropRecommendations;
