import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const KnowSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    {
      name: 'General',
      faqs: [
        {
          question: 'Who can become a producer on the platform?',
          answer: 'Any producer who can verify their identity using CAC, Nigeria\'s business identification system, NIN number and International passport can register and upload movies.'
        },
        {
          question: 'Why do I need to certify my account?',
          answer: 'Certification ensures that only legitimate producers upload content, maintaining quality and trust on the platform.'
        },
        {
          question: 'How long does the certification process take?',
          answer: 'Verification may take some time as we confirm your credentials, but once approved, you can start uploading movies immediately.'
        }
      ]
    },
    {
      name: 'Uploading',
      faqs: [
        {
          question: 'How do I upload a movie?',
          answer: 'Once certified, you can upload movies from a laptop only by following the instructions in your dashboard.'
        },
        {
          question: 'Can I upload movies that are premiering in cinemas?',
          answer: 'Yes! Producers can upload movies that are also premiering in cinemas and set a price for users to pay and watch.'
        },
        {
          question: 'How do I set a price for my cinema-premiering movie?',
          answer: 'When uploading a cinema-premiering movie, you\'ll have an option to set a price. Users must pay this amount to watch your movie on the platform.'
        },
        {
          question: 'Will I still earn from watch hours if my movie is pay-to-watch?',
          answer: 'No, earnings from cinema-premiering movies come directly from user payments, not watch hours.'
        }
      ]
    },
    {
      name: 'Leaderboard',
      faqs: [
        {
          question: 'How is my movie\'s performance tracked?',
          answer: 'We track the total number of users who complete watching your movie. For standard uploads, this determines leaderboard ranking and earnings. For cinema-premiering movies, revenue is based on the number of users who pay to watch.'
        },
        {
          question: 'Does the leaderboard reset?',
          answer: 'Yes, the leaderboard resets every month to allow fresh competition among producers.'
        },
        {
          question: 'Can the same user watching my movie multiple times increase my ranking?',
          answer: 'No, repeat views by the same user do not count. Only new unique users contribute to your total watch hours.'
        }
      ]
    },
    {
      name: 'Earnings',
      faqs: [
        {
          question: 'How do producers earn money?',
          answer: 'Producers earn a share of the monthly subscription revenue based on their total watch hours.'
        },
        {
          question: 'How do I earn from a movie that is premiering in cinemas?',
          answer: 'You earn directly from user payments. The more users pay to watch your movie, the more revenue you generate.'
        },
        {
          question: 'Can I upload both free and pay-to-watch movies?',
          answer: 'Yes! You can upload standard movies that earn through watch hours and premium movies that require users to pay before watching.'
        },
        {
          question: 'What if my movie gets fewer watch hours?',
          answer: 'Earnings are directly linked to engagement. To maximize revenue, market your movie to attract more viewers.'
        },
        {
          question: 'Do I need to set my own movie price?',
          answer: 'No, earnings come from a shared subscription pool, so you don\'t need to price your movie separately.'
        }
      ]
    }
  ];

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
    setOpenFAQ(null);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
    setOpenFAQ(null);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Want To Know, Answered.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We get it — you have a bunch of 🤔 questions. That's why we broke down how the platforms works — from uploading your movies to climbing he leaderboard and earning from engagement.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center mb-8"
        >
          <button
            onClick={prevCategory}
            className="px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-200 mr-4"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="text-xl font-semibold text-red-600 min-w-[120px] text-center">
            {categories[activeCategory].name}
          </div>

          <button
            onClick={nextCategory}
            className="px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-200 ml-4"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {categories[activeCategory].faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="text-gray-800 font-medium text-lg pr-4">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? 'auto' : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KnowSection;