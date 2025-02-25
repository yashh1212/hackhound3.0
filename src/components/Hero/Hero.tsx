import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.h1 
        variants={fadeInUp}
        className="text-5xl sm:text-7xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
          NEXT-GEN
        </span>
        <br />
        <span className="text-slate-900 dark:text-white">
          EXAM PLATFORM
        </span>
      </motion.h1>
      <motion.p 
        variants={fadeInUp}
        className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
      >
        Transform your educational assessment with AI-powered exam management, 
        real-time monitoring, and comprehensive analytics
      </motion.p>
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Get Started Free
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
        >
          Watch Demo
        </motion.button>
      </motion.div>
    </motion.div>
  );
}