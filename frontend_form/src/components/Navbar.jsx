import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

function Navbar() {
  const handleGetStarted = () => {
    scroller.scrollTo('suggestedCrop', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className="bg-green-600 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">CropDetector</Link>
        <ul className="flex space-x-8">
          <li><Link to="/" className="text-2xl text-white transition duration-300 transform hover:scale-110 hover:underline">Home</Link></li>
          <li><Link to="/calculate" className="text-2xl text-white transition duration-300 transform hover:scale-110 hover:underline">Calculate</Link></li>
          <li><Link to="/FarmerGuide" className="text-2xl text-white transition duration-300 transform hover:scale-110 hover:underline">Guide</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
