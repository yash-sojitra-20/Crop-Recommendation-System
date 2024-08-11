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
  const [predictions, setPredictions] = useState({
    crop: '',
    cropGuj: '',
    rotatedCrop: '',
    rotatedCropGuj: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict/', formData);
      setPredictions({
        crop: response.data.crop,
        cropGuj: response.data.cropGuj,
        rotatedCrop: response.data.rotatedCrop,
        rotatedCropGuj: response.data.rotatedCropGuj
      });
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="bg-white rounded-lg p-8 max-w-6xl w-full flex flex-col md:flex-row">
        {/* Left side (Form) */}
        <div className="w-full md:w-3/5 pr-0 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Crop Prediction Form</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Inputs */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nitrogen (N):</label>
                <input
                  type="number"
                  name="N"
                  value={formData.N}
                  onChange={handleChange}
                  placeholder="Enter Nitrogen level"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phosphorus (P):</label>
                <input
                  type="number"
                  name="P"
                  value={formData.P}
                  onChange={handleChange}
                  placeholder="Enter Phosphorus level"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Potassium (K):</label>
                <input
                  type="number"
                  name="K"
                  value={formData.K}
                  onChange={handleChange}
                  placeholder="Enter Potassium level"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Temperature:</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  placeholder="Enter Temperature"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Humidity:</label>
                <input
                  type="number"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleChange}
                  placeholder="Enter Humidity"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">pH:</label>
                <input
                  type="number"
                  name="ph"
                  value={formData.ph}
                  onChange={handleChange}
                  placeholder="Enter pH level"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Rainfall:</label>
                <input
                  type="number"
                  name="rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                  placeholder="Enter Rainfall"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tolerance (k):</label>
                <input
                  type="number"
                  name="k"
                  value={formData.k}
                  onChange={handleChange}
                  placeholder="Enter Tolerance level"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105">
                Predict Crop
              </button>
            </div>
          </form>
        </div>

        {/* Right side (Prediction Result) */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center text-center">
          {predictions.crop && (
            <div className="bg-green-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-green-800">Recommended Crop:</h3>
              <p className="mt-4 text-lg text-green-700">
                {predictions.crop} / {predictions.cropGuj}
              </p>
            </div>
          )}
          {predictions.rotatedCrop && (
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-yellow-800">Recommended Crop Rotation:</h3>
              <p className="mt-4 text-lg text-yellow-700">
                {predictions.rotatedCrop} / {predictions.rotatedCropGuj}
              </p>
            </div>
          )}
          {/* <img src={imageUrl} alt="Predicted Crop" className="w-full h-64 object-cover rounded-lg shadow-md" /> */}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white rounded-lg p-8 mt-8 max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding the Constraints</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong>Nitrogen (N):</strong> Essential nutrient for plant growth, critical for the synthesis of proteins, enzymes, and chlorophyll.</li>
          <li><strong>Phosphorus (P):</strong> Important for root development and flowering, aiding in the transfer of energy in plants.</li>
          <li><strong>Potassium (K):</strong> Helps in photosynthesis, water regulation, and the formation of plant sugars and starches.</li>
          <li><strong>Temperature:</strong> Affects seed germination, plant growth, and crop yield. Different crops have varying temperature requirements.</li>
          <li><strong>Humidity:</strong> Influences the rate of evapotranspiration, pest incidence, and disease prevalence in crops.</li>
          <li><strong>pH:</strong> Determines nutrient availability to plants. Most crops thrive in a pH range of 6 to 7.5.</li>
          <li><strong>Rainfall:</strong> Provides the necessary water for crops. Different crops require varying amounts of rainfall for optimal growth.</li>
          <li><strong>Tolerance (k):</strong> The tolerance level (k) defines the margin of error in prediction, allowing for variability in environmental conditions.</li>
        </ul>
      </div>
    </div>
  );
}

export default CropPredictionForm;
