import React from 'react';
import logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
   <nav className="container mx-auto max-w-full flex items-center justify-between px-4 md:px-12 lg:px-20 py-3">
        
     
        <button className="md:hidden text-2xl">☰</button>

        <div className="flex items-center">
          <img src={logo} alt="Dev Stack" className="h-8" />
        </div>


        <ul className="hidden md:flex gap-6 font-medium text-gray-600">
          <li className="text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">Projects</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

    
        <div className="flex items-center gap-3">
          <button className="text-gray-700 font-medium text-sm sm:text-base">Sign In</button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-5 py-2 rounded-full font-medium text-sm sm:text-base">
            Sign Up
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Nav;