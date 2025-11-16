'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black flex items-center justify-center pt-20 pb-10 px-4 md:px-8 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        className="w-full max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={containerVariants}
          >
            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-block"
                variants={itemVariants}
              >
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-sm font-semibold">Welcome to My Portfolio</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Build Amazing</span>
                <br />
                <span className="text-white">Digital Experiences</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Full-stack developer crafting beautiful and functional web experiences. Specialized in React, Next.js, and modern web technologies with a passion for creating exceptional user interfaces.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-blue-400">50+</p>
                <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-purple-400">10+</p>
                <p className="text-gray-400 text-sm mt-2">Years Experience</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-pink-400">100%</p>
                <p className="text-gray-400 text-sm mt-2">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4 pt-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-blue-500/50 hover:border-blue-400 text-blue-300 hover:text-blue-200 font-bold rounded-lg transition-all duration-300 hover:bg-blue-500/10">
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="hidden md:flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Gradient Orb */}
              <motion.div
                className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Center Icon Box */}
              <motion.div
                className="relative z-10 w-48 h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl flex items-center justify-center backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-blue-300 font-semibold">Full-Stack Dev</p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-2xl border border-cyan-500/30 flex items-center justify-center"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl">⚛️</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl border border-purple-500/30 flex items-center justify-center"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-400 text-sm mb-3 text-center">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
