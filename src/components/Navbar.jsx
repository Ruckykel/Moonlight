// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-gray-100 px-4 py-3 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Left aligned on desktop, centered on mobile */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex-shrink-0 md:flex-grow-0 flex-grow flex justify-center md:justify-start"
        >
          <img 
            src="/MoonlightRed.png" 
            alt="Moonlight" 
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Start uploading button - Hidden on mobile, visible on desktop */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="hidden md:block"
        >
          <a href="https://producer.dmoonlight.com/">
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Start uploading
          </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;