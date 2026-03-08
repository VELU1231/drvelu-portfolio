'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop',
    github: 'https://github.com/VELU1231',
    live: '#',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description:
      'Real-time AI-powered chat app with WebSocket support, user auth, and smart message suggestions.',
    tags: ['Next.js', 'Python', 'OpenAI', 'WebSocket'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop',
    github: 'https://github.com/VELU1231',
    live: '#',
  },
  {
    id: 3,
    title: 'Task Automation Suite',
    description:
      'Python-based automation toolkit for web scraping, data processing, and scheduled task execution.',
    tags: ['Python', 'Selenium', 'Docker', 'Celery'],
    image:
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=340&fit=crop',
    github: 'https://github.com/VELU1231',
    live: '#',
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard',
    description:
      'Interactive dashboard with real-time analytics, customizable charts, and data export capabilities.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    github: 'https://github.com/VELU1231',
    live: '#',
  },
  {
    id: 5,
    title: 'DevOps Pipeline Tool',
    description:
      'CI/CD pipeline management tool with automated testing, deployment workflows, and monitoring.',
    tags: ['Docker', 'AWS', 'GitHub Actions', 'Node.js'],
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=340&fit=crop',
    github: 'https://github.com/VELU1231',
    live: '#',
  },
  {
    id: 6,
    title: 'Web Scraping Framework',
    description:
      'Scalable web scraping framework with proxy rotation, rate limiting, and structured data output.',
    tags: ['Python', 'Scrapy', 'PostgreSQL', 'Redis'],
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=340&fit=crop',
    github: 'https://github.com/VELU1231',
    live: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-violet-400 tracking-wider uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            A selection of my recent work across web development, automation, and data engineering.
          </p>
        </motion.div>

        {/* Projects Grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass-card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />

                {/* Overlay icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-violet-500/10 text-violet-300 rounded-md border border-violet-500/15 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
