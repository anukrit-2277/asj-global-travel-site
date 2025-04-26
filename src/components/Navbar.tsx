
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <nav className="bg-white shadow-md fixed w-full z-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center">
            <img src="src/assets/logo_modified.png" alt="Logo" className="h-10 w-10 object-contain" />
          </a>
          <span className="text-xl font-playfair font-bold text-gray-800">ASJ Global</span>
        </div>
  
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
  
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
  
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
        <div className="flex flex-col space-y-3">
          <a href="#home" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </div>
  </nav>
  
      
  );
};

export default Navbar;
