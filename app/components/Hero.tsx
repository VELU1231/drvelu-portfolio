'use client';

import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="text-center" variants={containerVariants}>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          variants={itemVariants}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Full-stack developer crafting beautiful and functional web experiences
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          variants={itemVariants}
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-semibold transition-colors">
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
