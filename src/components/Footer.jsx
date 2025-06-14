import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              {/* Replace '/your-logo.png' with your actual logo file path */}
              <img 
                src="/MoonlightRed.png" 
                alt="Moonlight Logo" 
                className="h-8 w-auto"
              />
              {/* Alternative text version - remove when using logo image */}
              {/* <h2 className="text-2xl font-bold text-red-600 relative">
                MOONLIGHT
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-600 rounded-full"></div>
              </h2> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <div className="space-y-3">
              <a href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                About Us
              </a>
              <a href="/careers" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Careers
              </a>
              <div className="pt-2">
                <p className="text-gray-600 text-sm">moonlight@email.com</p>
                <p className="text-gray-600 text-sm">(555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Content Links */}
          <div className="md:col-span-1">
            <div className="space-y-3">
              <a href="/movies" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Movies
              </a>
              <a href="/tv-shows" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                TV Shows
              </a>
              <a href="/become-producer" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Become a Producer
              </a>
            </div>
          </div>

          {/* Support & Social */}
          <div className="md:col-span-1">
            <div className="space-y-3 mb-6">
              <a href="/help" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Help Center
              </a>
              <a href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Contact
              </a>
              <a href="/report" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Report Issue
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Moonlight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;