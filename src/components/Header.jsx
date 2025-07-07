// src/components/Header.jsx
import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaStar } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-900 to-red-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Brand Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                PremiumFlix
              </h1>
              <p className="text-red-200 text-xs sm:text-sm">
                Premium Apps Store
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://wa.me/6285714608649"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>

            <a
              href="https://instagram.com/premiumflix__"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors duration-200"
            >
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>

            <a
              href="https://tiktok.com/@premiumflix"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-black hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
