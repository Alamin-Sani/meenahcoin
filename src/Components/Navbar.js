// components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 md:bg-dark sticky top-0 z-50">
      {/* Container for the navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            <h1 className='text-white font-bold text-3xl'>MeenahCoin</h1>
            {/* <img
              className="h-8 w-auto"
              src="/logo.png" 
              alt="Logo"
            /> */}
          </div>

          {/* Right Side - Links (Hidden on Mobile) */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#whyus"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-bold"
            >
              Why MeenahCoin
            </a>
            <a
              href="#how"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-bold"
            >
              How It Works
            </a>
            <a
              href="#roadmap"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-bold"
            >
              Roadmap
            </a>
            <a
              href="#tokenomics"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-bold"
            >
              Tokenomics
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#whyus"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Why Meenah
            </a>
            <a
              href="#how"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              How It Works
            </a>
            <a
              href="#roadmap"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Roadmap
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
