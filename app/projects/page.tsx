'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced search.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    highlights: ['Real-time Inventory', 'Payment Integration', 'Admin Dashboard'],
    impact: 'Increased conversion rate by 40% with optimized UX',
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    description: 'Enterprise analytics platform with real-time data visualization, predictive analytics, and customizable reporting.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
    highlights: ['Real-time Analytics', 'Custom Reports', 'Data Security'],
    impact: 'Served 500+ enterprise clients with 99.9% uptime',
  },
  {
    id: 3,
    title: 'Mobile App - Fitness Tracker',
    description: 'Cross-platform mobile application for fitness tracking with ML-powered workout recommendations.',
    technologies: ['React Native', 'Firebase', 'ML Kit', 'Redux'],
    highlights: ['Offline Sync', 'ML Recommendations', 'Social Features'],
    impact: '50k+ downloads with 4.8-star rating',
  },
  {
    id: 4,
    title: 'AI-Powered Content Generator',
    description: 'Advanced AI tool for generating high-quality content with NLP, supporting multiple languages.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    highlights: ['Multi-language Support', 'Content Templates', 'API Integration'],
    impact: 'Reduced content creation time by 70%',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <div className="section-container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h1>
          <p className="text-white/50 text-lg">
            Explore my latest work and contributions to the tech community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
              <p className="text-white/50 text-sm mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-violet-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs bg-violet-500/10 text-violet-300 rounded-md border border-violet-500/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-emerald-400 mb-2">Highlights:</p>
                <ul className="text-xs text-white/50 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-400">→</span>{h}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-amber-400/80 italic">{project.impact}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
