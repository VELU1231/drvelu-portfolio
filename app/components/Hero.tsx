'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const floatingElements = [
  { content: 'def automate():', x: '8%', y: '18%', delay: 0, duration: 6 },
  { content: '$ docker build', x: '78%', y: '12%', delay: 1.5, duration: 7 },
  { content: 'import React', x: '85%', y: '65%', delay: 0.8, duration: 5.5 },
  { content: 'async/await', x: '5%', y: '72%', delay: 2, duration: 6.5 },
  { content: '>>> AI.train()', x: '70%', y: '40%', delay: 1, duration: 7.5 },
  { content: 'git push origin', x: '15%', y: '45%', delay: 2.5, duration: 6 },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 6,
  size: 1 + Math.random() * 2,
}));

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/[0.04] rounded-full blur-[150px]" />
      </div>

      {/* Floating code snippets */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block pointer-events-none"
          style={{ left: el.x, top: el.y }}
          animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        >
          <div className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.06] rounded-lg text-[11px] font-mono text-white/20">
            {el.content}
          </div>
        </motion.div>
      ))}

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-violet-400/30 pointer-events-none"
          style={{
            left: `${p.x}%`,
            bottom: '-5%',
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -800],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="section-container relative z-10 text-center py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">
            <Sparkles size={14} />
            Full-Stack Developer & Automation Expert
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-white">{"Hi, I'm Velu — I build"}</span>
          <br />
          <span className="gradient-text">intelligent web apps</span>
          <br />
          <span className="text-white">and automation tools.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-stack developer focused on Python, automation, and modern web
          applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group px-7 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm inline-flex items-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-shadow"
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3.5 bg-white/[0.05] border border-white/[0.1] text-white/80 hover:text-white hover:bg-white/[0.08] font-semibold rounded-xl text-sm transition-all"
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
