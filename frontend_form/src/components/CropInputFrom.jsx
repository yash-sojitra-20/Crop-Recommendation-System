import React, { useState } from 'react';
import axios from 'axios';

const imageUrl = 'https://i0.wp.com/geopard.tech/wp-content/uploads/2022/06/63.2-min.jpg?resize=810%2C439&ssl=1';

function CropPredictionForm() {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
    k: '10'
  });
  const [crop, setCrop] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict/', formData);
      setCrop(response.data.crop);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="bg-white rounded-lg p-2 max-w-6xl mx-auto flex">
      {/* Left side (Form) */}
      <div className="w-4/5 pr-8"> {/* Adjusted the width to 80% */}
        <h2 className="text-2xl font-bold text-green-700 mb-4">Crop Prediction Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Nitrogen (N):</label>
              <input
                type="number"
                name="N"
                value={formData.N}
                onChange={handleChange}
                placeholder="Enter Nitrogen level"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phosphorus (P):</label>
              <input
                type="number"
                name="P"
                value={formData.P}
                onChange={handleChange}
                placeholder="Enter Phosphorus level"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Potassium (K):</label>
              <input
                type="number"
                name="K"
                value={formData.K}
                onChange={handleChange}
                placeholder="Enter Potassium level"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Temperature:</label>
              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="Enter Temperature"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Humidity:</label>
              <input
                type="number"
                name="humidity"
                value={formData.humidity}
                onChange={handleChange}
                placeholder="Enter Humidity"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">pH:</label>
              <input
                type="number"
                name="ph"
                value={formData.ph}
                onChange={handleChange}
                placeholder="Enter pH level"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Rainfall:</label>
              <input
                type="number"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                placeholder="Enter Rainfall"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Tolerance (k):</label>
              <input
                type="number"
                name="k"
                value={formData.k}
                onChange={handleChange}
                placeholder="Enter Tolerance level"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300">
              Predict Crop
            </button>
          </div>
        </form>
      </div>

      {/* Right side (Prediction Result) */}
      <div className="w-1/5 pl-8 flex flex-col items-center justify-center text-center"> {/* Adjusted the width to 20% */}
        {crop && (
          <div className="bg-green-100 p-6 rounded-md mb-4">
            <h3 className="text-xl font-semibold text-green-700">Recommended Crop:</h3>
            <p className="mt-4 text-lg text-green-600">{crop}</p>
          </div>
        )}
        <img src={imageUrl} alt="Predicted Crop" className="w-full h-64 object-cover rounded-md" />
      </div>
    </div>
  );
}

export default CropPredictionForm;
