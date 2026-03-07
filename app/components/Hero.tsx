'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import {
  staggerContainer,
  staggerFast,
  fadeInUp,
  buttonTap,
  arrowRight,
} from '../lib/animations';

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/** Same as heroItem but delayed — used for the tech badges row */
const heroItemDelayed = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.7 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center pt-20 pb-16 px-4 md:px-8 overflow-hidden relative"
    >
      {/* Subtle background glows — slow float */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      <motion.div
        className="w-full max-w-5xl mx-auto relative z-10"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Availability badge */}
        <motion.div variants={heroItem} className="flex justify-center md:justify-start mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={heroItem} className="text-center md:text-left mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Velu
            </span>
            <br />
            <span className="text-white">Full-Stack </span>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={heroItem}
          className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl text-center md:text-left mb-10"
        >
          I design and build fast, accessible, and beautiful web applications.
          Specialised in React, Next.js, and Node.js — turning ideas into
          polished digital products.
        </motion.p>

        {/* CTA Buttons — Framer Motion hover + tap */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <motion.div
            variants={buttonTap}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 no-underline"
            >
              View Projects
              <motion.span variants={arrowRight}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
          <motion.div
            variants={buttonTap}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-slate-800 no-underline"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech badges — individual stagger */}
        <motion.div
          variants={heroItemDelayed}
          className="mt-16"
        >
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            variants={staggerFast}
            initial="hidden"
            animate="visible"
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
              <motion.span
                key={tech}
                variants={fadeInUp}
                className="px-3 py-1 text-sm text-slate-400 bg-slate-800/60 border border-slate-700/60 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.6 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

