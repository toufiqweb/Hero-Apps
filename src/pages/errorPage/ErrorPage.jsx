import React from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo.png"

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f1a] px-4 sm:px-6 md:px-8 overflow-hidden relative">
      
      {/* Glow Background */}
      <div className="absolute max-w-[250px] sm:max-w-[400px] md:max-w-[500px] max-h-[250px] sm:max-h-[400px] md:max-h-[500px] 
        bg-[#632EE3]/30 blur-[120px] rounded-full 
        top-[-80px] left-[-80px] animate-pulse">
      </div>

      <div className="absolute max-w-[200px] sm:max-w-[350px] md:max-w-[400px] max-h-[200px] sm:max-h-[350px] md:max-h-[400px] 
        bg-[#9F62F2]/30 blur-[120px] rounded-full 
        -bottom-20 -right-20 animate-pulse">
      </div>

      <div className="text-center z-10 max-w-xl w-full">
        
        {/* Logo */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <img
            src={logo}
            alt="logo"
            className="w-24 sm:w-32 md:w-40 animate-spin-slow hover:scale-110 transition duration-500"
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold 
          bg-linear-to-r from-[#632EE3] to-[#9F62F2] 
          bg-clip-text text-transparent animate-fade-in">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3 sm:mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base max-w-md mx-auto">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-5 sm:mt-6">
          <Link
            to="/"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base
            text-white font-semibold 
            bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
            hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Go Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;