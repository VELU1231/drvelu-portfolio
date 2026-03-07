'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHover, arrowRight, iconHoverLeft } from '../lib/animations';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const FEATURED = {
  title: 'CreatorOS',
  tagline: 'AI-Powered Content Creation Platform',
  description:
    'A powerful AI platform purpose-built for Gen-Z creators on YouTube, TikTok, and Instagram. Generate viral hooks, stunning thumbnails, and engaging scripts in seconds. Trusted by 120K+ creators worldwide.',
  tags: ['Next.js', 'OpenAI', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
  image:
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=460&fit=crop',
  live: 'https://creatoros.drvelu.com/',
  github: '#',
  stats: [
    { value: '120K+', label: 'Creators Helped' },
    { value: '10M+', label: 'Posts Created' },
    { value: '4.9/5', label: 'Avg Rating' },
  ],
};

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with cart, payments, and admin dashboard built with React, Next.js, and MongoDB.',
    tags: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description:
      'Real-time chat application powered by AI with WebSocket support, message history, and user authentication.',
    tags: ['Next.js', 'WebSocket', 'OpenAI', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Task Management SaaS',
    description:
      'Collaborative task management platform with real-time updates, team workspaces, and drag-and-drop boards.',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description:
      'Interactive data visualisation dashboard with real-time charts, filters, and exportable reports.',
    tags: ['React', 'D3.js', 'Chart.js', 'Node.js'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Developer Blog Platform',
    description:
      'MDX-powered blog with syntax highlighting, RSS feed, dark mode, and an admin editor for publishing posts.',
    tags: ['Next.js', 'MDX', 'TypeScript', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 6,
    title: 'Cloud Storage API',
    description:
      'RESTful file storage API with S3 integration, presigned URLs, access control, and usage analytics.',
    tags: ['Node.js', 'AWS S3', 'Express', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
];

/* ─── Section heading helper ─────────────────────────────────────────────── */
function SectionHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
        Portfolio
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Featured Projects
      </h2>
      <p className="text-slate-400 text-lg max-w-xl mx-auto">
        A selection of products and projects I&apos;ve designed and shipped — from
        concept to production.
      </p>
    </motion.div>
  );
}

/* ─── CreatorOS featured card ────────────────────────────────────────────── */
function FeaturedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* Gradient-border wrapper */}
      <div className="gradient-border">
        <div className="glass rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: description */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Featured badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold mb-6">
                  ✦ Featured Product
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {FEATURED.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-4">
                  {FEATURED.tagline}
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {FEATURED.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-8">
                  {FEATURED.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold text-white">{s.value}</p>
                      <p className="text-slate-500 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {FEATURED.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={FEATURED.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-blue-600/25 no-underline"
                >
                  Visit CreatorOS
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={FEATURED.github}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold rounded-xl transition-all hover:bg-slate-800/60 no-underline"
                >
                  <Github className="w-4 h-4" />
                  Source
                </motion.a>
              </div>
            </div>

            {/* Right: screenshot */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <motion.img
                src={FEATURED.image}
                alt="CreatorOS platform screenshot"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Regular project card ───────────────────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        variants={cardHover}
        className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-colors duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col h-full backdrop-blur-sm"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-slate-800 flex-shrink-0">
          <motion.img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="inline-flex"
            >
              <Link
                href={project.github}
                className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors no-underline"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <motion.span variants={iconHoverLeft}>
                  <Github className="w-4 h-4" />
                </motion.span>
                Source
              </Link>
            </motion.div>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="inline-flex ml-auto"
            >
              <Link
                href={project.live}
                className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors no-underline"
                aria-label={`Open ${project.title} live demo`}
              >
                Live Demo
                <motion.span variants={arrowRight}>
                  <ExternalLink className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

/* ─── Main export ─────────────────────────────────────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading />

        {/* Featured CreatorOS card */}
        <FeaturedCard />

        {/* 3-column responsive grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


