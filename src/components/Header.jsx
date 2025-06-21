import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-600 font-semibold text-[#0e3477]">Home</Link>
            <Link to="/services" className="hover:text-gray-600 font-semibold text-[#0e3477]">Services</Link>
            <Link to="/about" className="hover:text-gray-600 font-semibold text-[#0e3477]">About</Link>
            <Link to="/contact" className="hover:text-gray-600 font-semibold text-[#0e3477]">Contact</Link>
            <Link to="/blog" className="hover:text-gray-600 font-semibold text-[#0e3477]">Blog</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="hover:text-gray-600 font-semibold text-[#0e3477]">Login</Link>
            <Link to="/signup" className="hover:text-gray-600 font-semibold text-[#0e3477]">Signup</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-[#0e3477] focus:outline-none">
              {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
            <Link to="/" className="block text-gray-600 font-semibold hover:text-[#0e3477]">Home</Link>
            <Link to="/services" className="block text-gray-600 font-semibold hover:text-[#0e3477]">Services</Link>
            <Link to="/about" className="block text-gray-600 font-semibold hover:text-[#0e3477]">About</Link>
            <Link to="/contact" className="block text-gray-600 font-semibold hover:text-[#0e3477]">Contact</Link>
            <Link to="/blog" className="block text-gray-600 font-semibold hover:text-[#0e3477]">Blog</Link>
            <div className="pt-2 space-y-1">
              <Link to="/login" className="block text-gray-600 font-semibold hover:text-[#0e3477]">Login</Link>
              <Link to="/signup" className="block text-gray-600 font-semibold hover:text-[#0e3477]">Signup</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
