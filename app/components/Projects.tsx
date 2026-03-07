'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with cart, payments, and admin dashboard built with React, Next.js, and MongoDB.',
    tags: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with WebSocket support, message history, and user authentication.',
    tags: ['Next.js', 'WebSocket', 'OpenAI', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Task Management SaaS',
    description: 'Collaborative task management platform with real-time updates, team workspaces, and drag-and-drop boards.',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    image: 'https://images.unsplash.com/photo-1540350967868-8a379e23c84d?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualisation dashboard with real-time charts, filters, and exportable reports.',
    tags: ['React', 'D3.js', 'Chart.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1526925216690-caa8d03a94ad?w=600&h=340&fit=crop',
    github: '#',
    live: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A selection of projects I&apos;ve designed and built from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 flex flex-col"
            >
              {/* Preview image */}
              <div className="relative h-44 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <Link
                    href={project.github}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors no-underline"
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </Link>
                  <Link
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors no-underline ml-auto"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
