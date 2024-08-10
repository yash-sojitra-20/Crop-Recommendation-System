import React from 'react';

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Image Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <img
          src="https://canadianfoodfocus.org/wp-content/uploads/2022/10/crop-rotation.jpg"
          alt="Crop Rotation"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Smart Crop Prediction</h1>
          <p className="text-lg max-w-2xl">
            Discover the best crops to grow based on your soil conditions and environmental factors. 
            Input your data, and let our AI-powered tool guide your farming decisions for optimal yield.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Why Use Our Tool?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Data-Driven Decisions</h3>
            <p className="text-gray-700">
              Our tool leverages advanced algorithms to analyze your soil data and environmental conditions, providing you with the most accurate crop recommendations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Easy to Use</h3>
            <p className="text-gray-700">
              Input your data easily through our intuitive interface, and receive instant, actionable insights to help you plan your crop rotations and improve yield.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Sustainable Farming</h3>
            <p className="text-gray-700">
              Promote sustainable farming practices by optimizing your crop rotations and reducing environmental impact, all while maximizing your harvest.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Trusted by Farmers</h3>
            <p className="text-gray-700">
              Join a growing community of farmers who trust our tool to make informed decisions and achieve better farming outcomes year after year.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Improve Your Harvest?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Start using our crop prediction tool today and take the guesswork out of farming. 
            Make data-driven decisions to enhance your farm’s productivity.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
