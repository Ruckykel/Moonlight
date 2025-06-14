// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';

const Media = () => {
  // Main content Rive animation
  const { RiveComponent: MainRive } = useRive({
    src: '/producers_files.riv',
    artboard: 'footer with nested', // Update with your actual artboard name
    stateMachines: 'footer with nested state machine', // Update with your actual state machine name
    autoplay: true,
  });

  // Button Rive animation
  const { RiveComponent: ButtonRive } = useRive({
    src: '/producers_files.riv', // Update with your button Rive file path
    artboard: 'and action button 2', // Update with your button artboard name
    stateMachines: 'and action button state machine', // Update with your button state machine name
    autoplay: true,
  });

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Rive Animation Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-64 md:h-80">
              <MainRive 
                style={{ 
                  width: '100%', 
                  height: '100%',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Rive Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="w-48 h-16 hidden"> {/* Adjust size as needed */}
            <ButtonRive 
              style={{ 
                width: '100%', 
                height: '100%',
                cursor: 'pointer'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;