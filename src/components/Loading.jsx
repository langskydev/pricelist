import React from 'react';
import { FaSpinner, FaStar } from 'react-icons/fa';

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-30"></div>

        {/* Gradient circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-red-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">

        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-2xl">
                <FaStar className="w-8 h-8 text-white animate-pulse" />
              </div>
              {/* Rotating ring */}
              <div className="absolute inset-0 border-4 border-white/30 border-t-white rounded-xl animate-spin"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">PremiumFlix</h1>
              <p className="text-red-200 text-lg">Premium Apps Store</p>
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          {/* Main spinner */}
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin animation-reverse"></div>
            <div className="absolute inset-4 border-4 border-transparent border-t-orange-500 rounded-full animate-spin"></div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaSpinner className="w-6 h-6 text-white animate-spin" />
            </div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>

          {/* Loading text */}
          <p className="text-white text-xl font-medium mb-2">{message}</p>
          <p className="text-red-200 text-sm">Menyiapkan pengalaman premium terbaik untuk Anda</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Features preview */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center opacity-70">
            <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-sm">🛡️</span>
            </div>
            <p className="text-xs text-white">Terpercaya</p>
          </div>
          <div className="text-center opacity-70">
            <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-sm">⚡</span>
            </div>
            <p className="text-xs text-white">Cepat</p>
          </div>
          <div className="text-center opacity-70">
            <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-sm">💎</span>
            </div>
            <p className="text-xs text-white">Premium</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for reverse animation */}
      <style jsx>{`
        .animation-reverse {
          animation-direction: reverse;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

// Simple loading with minimal design
export const SimpleLoading = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <FaStar className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <FaSpinner className="w-5 h-5 text-red-600 animate-spin" />
              <span className="text-red-900 font-semibold">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading with custom content
export const LoadingWithContent = ({ title = "Loading", subtitle = "Please wait..." }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-900/90 to-red-800/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-sm mx-4">
        <div className="text-center">
          {/* Logo */}
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FaStar className="w-6 h-6 text-white" />
          </div>

          {/* Spinner */}
          <div className="w-8 h-8 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>

          {/* Text */}
          <h3 className="text-red-900 font-bold text-lg mb-2">{title}</h3>
          <p className="text-red-600 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

// Loading for specific actions
export const ActionLoading = ({ action = "Processing", isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl mx-4">
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 border-2 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
          <span className="text-red-900 font-medium">{action}...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
