'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Next.js, Stripe payment integration, and MongoDB.',
    tags: ['React', 'Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with WebSocket support and user authentication.',
    tags: ['Next.js', 'WebSocket', 'OpenAI', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=500&h=300&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Task Management SaaS',
    description: 'Collaborative task management platform with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    image: 'https://images.unsplash.com/photo-1540350967868-8a379e23c84d?w=500&h=300&fit=crop',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard with real-time analytics, charts, and data insights.',
    tags: ['React', 'D3.js', 'Chart.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1526925216690-caa8d03a94ad?w=500&h=300&fit=crop',
    github: '#',
    live: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my latest work and contributions to the tech community.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                <Link
                  href={project.github}
                  className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all"
                >
                  <Github className="w-6 h-6 text-white" />
                </Link>
                <Link
                  href={project.live}
                  className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-all"
                >
                  <ExternalLink className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
