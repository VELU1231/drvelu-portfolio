'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { staggerFast, fadeInUp, buttonTap, arrowRight } from '../lib/animations';
import { DevVisuals } from './DevVisuals';

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Built' },
  { value: '15+', label: 'Happy Clients' },
];

const TECH_BADGES = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 md:px-8 overflow-hidden relative bg-slate-950"
    >
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"
          animate={{ y: [0, -24, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-600/8 rounded-full blur-3xl"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <motion.div
        className="w-full max-w-7xl mx-auto relative z-10"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Two-column layout: text left, visuals right ── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left column: Text content ── */}
          <div>
            {/* Availability badge */}
            <motion.div variants={heroItem} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Main headline — very large on xl */}
            <motion.div variants={heroItem} className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  Velu
                </span>
                <br />
                <span className="text-white">Full-Stack</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
            >
              I design and build fast, accessible, and beautiful web applications.
              Specialised in React, Next.js, and Node.js — turning ideas into
              polished digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <motion.div
                variants={buttonTap}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/30 no-underline text-base"
                >
                  View Projects
                  <motion.span variants={arrowRight}>
                    <ArrowRight className="w-5 h-5" />
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-slate-800/60 no-underline text-base"
                >
                  <Mail className="w-5 h-5" />
                  Hire Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={heroItem} className="flex gap-8 mb-10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-bold text-white mb-0.5">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tech badges — staggered */}
            <motion.div variants={heroItem}>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerFast}
                initial="hidden"
                animate="visible"
              >
                {TECH_BADGES.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={fadeInUp}
                    className="px-3 py-1 text-xs text-slate-400 bg-slate-800/60 border border-slate-700/60 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right column: Floating developer visuals (desktop only) ── */}
          <motion.div variants={heroItem} className="hidden lg:block">
            <DevVisuals />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 2 },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

