// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const Hero = () => {
  const { RiveComponent } = useRive({
    src: '/producers_files.riv',
    autoplay: true,
    artboard: 'hero section',
    stateMachines: 'hero section state machine', // Keep this as it might be needed
  });

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Rive Animation Container */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-full max-w-2xl h-32 md:h-40">
              <RiveComponent 
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Join the platform where producers earn by uploading their movies/series to an expanding audience
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a href="https://producer.dmoonlight.com/">
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-lg"
          >
            Start uploading
          </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;