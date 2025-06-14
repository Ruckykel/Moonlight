// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';

const FeatureCard = ({ riveSrc, artboard, stateMachine, iconSrc, title, description, delay = 0 }) => {
  const { RiveComponent } = useRive({
    src: riveSrc,
    artboard: artboard,
    stateMachines: stateMachine,
    autoplay: true,
  });

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col"
    >
      {/* Rive Animation Container */}
      <div className="mb-6 bg-gray-50 rounded-lg overflow-hidden">
        <div className="w-full h-48 md:h-56">
          <RiveComponent 
            style={{ 
              width: '100%', 
              height: '100%',
            }}
          />
        </div>
      </div>

      {/* Icon */}
      <div className="mb-4">
        <img 
          src={iconSrc} 
          alt={title}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      riveSrc: '/producers_files.riv',
      artboard: 'certify', // Update with your actual artboard name
      stateMachine: 'certify state machine', // Update with your actual state machine name
      iconSrc: '/certify.svg',
      title: 'Verify your profile',
      description: 'Confirm your identity with your CAC registered agency name and certificate. This step to hundred—only certified producers can easily monetize their content. Keep your light secure.'
    },
    {
      riveSrc: '/producers_files.riv',
      artboard: 'upload a movie', // Update with your actual artboard name
      stateMachine: 'upload state machine', // Update with your actual state machine name
      iconSrc: '/upload.svg',
      title: 'Upload a movie',
      description: 'After certification, upload movies from a gallery and earn based on completed views. You can also upload movies you want to share with specific audience.'
    },
    {
      riveSrc: '/producers_files.riv',
      artboard: 'view leaderboard', // Update with your actual artboard name
      stateMachine: 'view leaderboard state machine', // Update with your actual state machine name
      iconSrc: '/leaderboard.svg',
      title: 'Track your total watch hours',
      description: 'Track your total watch hours and rank among other producers. The more hours you accumulate, the higher your position. The leaderboard resets monthly for fair competition.'
    },
    {
      riveSrc: '/producers_files.riv',
      artboard: 'earn', // Update with your actual artboard name
      stateMachine: 'earn state machine', // Update with your actual state machine name
      iconSrc: '/earn.svg',
      title: 'Monthly earnings',
      description: 'Your earnings are based on the percentage of total watch hours your content generates. The more completed views you get, the bigger your share of the monthly revenue.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of producers already earning from their content
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              riveSrc={feature.riveSrc}
              artboard={feature.artboard}
              stateMachine={feature.stateMachine}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;