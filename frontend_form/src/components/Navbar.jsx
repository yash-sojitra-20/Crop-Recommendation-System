import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Crop Detection</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white text-lg hover:text-green-200">Home</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
