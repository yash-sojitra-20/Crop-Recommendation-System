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
    <div className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto relative">
      <img src={imageUrl} alt="Crop Prediction" className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg" />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Crop Prediction Form</h2>

        {/* Introductory Content */}
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Welcome to our Crop Prediction Tool!</strong> This advanced tool is designed to assist farmers in choosing the most suitable crops for their fields based on current soil and weather conditions.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            By providing information such as nutrient levels, temperature, and humidity, our system analyzes the data to recommend the best crop options. This helps optimize your farming practices, leading to better yields and efficient resource use.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Please fill out the form below with accurate details about your field's conditions. The more precise your inputs, the more reliable the crop recommendations will be. Submit the form to get personalized crop suggestions tailored to your data.
          </p>
        </div>

        {/* Crop Prediction Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nitrogen (N):</label>
            <input
              type="number"
              name="N"
              value={formData.N}
              onChange={handleChange}
              placeholder="Enter Nitrogen level"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300">
            Predict Crop
          </button>
        </form>
        {crop && <p className="mt-4 text-lg font-semibold text-green-600">Recommended Crop: {crop}</p>}
      </div>
    </div>
  );
}

export default CropPredictionForm;
