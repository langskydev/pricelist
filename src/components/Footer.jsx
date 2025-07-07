// src/components/Footer.jsx
import React from 'react';
import { FaClock, FaHeadset, FaHeart, FaInstagram, FaShieldAlt, FaStar, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white overflow-hidden">

      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <FaStar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">PremiumFlix</h3>
                <p className="text-red-200 text-sm">Premium Apps Store</p>
              </div>
            </div>
            <p className="text-red-100 text-sm mb-6 max-w-md">
              Menyediakan layanan berlangganan aplikasi premium dengan harga terjangkau dan kualitas terpercaya.
              Pengalaman digital terbaik untuk kebutuhan Anda.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/6285714608649"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com/premiumflix__"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://tiktok.com/@premiumflix"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-105"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Keunggulan Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-red-100">
                <FaShieldAlt className="w-4 h-4 text-yellow-400" />
                <span>Garansi Terpercaya</span>
              </li>
              <li className="flex items-center space-x-2 text-red-100">
                <FaClock className="w-4 h-4 text-yellow-400" />
                <span>Proses Cepat</span>
              </li>
              <li className="flex items-center space-x-2 text-red-100">
                <FaHeadset className="w-4 h-4 text-yellow-400" />
                <span>Support 24/7</span>
              </li>
              <li className="flex items-center space-x-2 text-red-100">
                <FaHeart className="w-4 h-4 text-yellow-400" />
                <span>Harga Terjangkau</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-red-100">
              <p>📱 Chat via WhatsApp untuk pemesanan cepat</p>
              <p>📧 Follow Instagram untuk update terbaru</p>
              <p>⏰ Layanan 24 jam setiap hari</p>
              <p>🎯 Respon dalam 5 menit</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-700/50 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-red-100 text-sm">
            <span>© 2024 PremiumFlix. Made with</span>
            <FaHeart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>for digital enthusiasts</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <span className="text-red-200">✨ Trusted by 10,000+ customers</span>
            <span className="text-red-200">🔐 100% Secure</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-600/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-xl"></div>
    </footer>
  );
};

export default Footer;
