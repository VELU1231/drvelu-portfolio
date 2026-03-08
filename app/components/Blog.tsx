'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Web Scrapers with Python',
    excerpt:
      'Learn how to build production-ready web scrapers using Python, Scrapy, and best practices for handling rate limits and proxies.',
    date: '2024-12-15',
    tags: ['Python', 'Automation'],
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Getting Started with Next.js App Router',
    excerpt:
      'A comprehensive guide to Next.js 14 App Router, server components, and modern React patterns for building fast web apps.',
    date: '2024-11-20',
    tags: ['Next.js', 'React'],
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Automating Workflows with GitHub Actions & Docker',
    excerpt:
      'How to set up CI/CD pipelines using GitHub Actions and Docker to automate testing, building, and deployment.',
    date: '2024-10-05',
    tags: ['DevOps', 'Docker'],
    readTime: '10 min read',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28">
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
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Thoughts on development, automation, and building for the web.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card-hover p-6 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-white/30 text-xs mb-4">
                <Calendar size={12} />
                <span>{formatDate(post.date)}</span>
                <span className="text-white/15">·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors leading-snug">
                {post.title}
                <ArrowUpRight
                  size={14}
                  className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h3>

              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] bg-violet-500/10 text-violet-300/80 rounded border border-violet-500/10 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
