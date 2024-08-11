import React from 'react';

function CropRotationSuggestions({ data }) {
  const rotationSuggestions = ['Soybean', 'Corn', 'Sunflower'];

  return (
    <ul className="list-disc pl-5 text-gray-700">
      {rotationSuggestions.map((crop, index) => (
        <li key={index} className="mb-2">{crop}</li>
      ))}
    </ul>
  );
}

export default CropRotationSuggestions;

