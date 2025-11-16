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
    hidden: { opacity: 0, y: 30 },
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
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Welcome to My</span>
            <br />
            <span className="text-white">Professional Portfolio</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 mb-2 font-light"
        >
          Full-stack developer crafting beautiful and functional web experiences
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        ></motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
            View My Work
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-400 hover:text-blue-300 hover:border-blue-500 font-bold rounded-lg backdrop-blur-md hover:bg-blue-600 hover:bg-opacity-10 transition-all duration-300 hover:-translate-y-1">
            Contact Me
          </button>
        </motion.div>

        {/* Stats or quick info */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center group">
            <div className="text-3xl font-bold text-blue-500 mb-2 group-hover:text-blue-400 transition-colors">50+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-500 mb-2 group-hover:text-purple-400 transition-colors">10+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-pink-500 mb-2 group-hover:text-pink-400 transition-colors">100%</div>
            <div className="text-sm text-gray-500">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
