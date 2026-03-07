'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHoverSm } from '../lib/animations';

const POSTS = [
  {
    slug: 'building-nextjs-app',
    title: 'Building a Production-Ready Next.js App',
    excerpt:
      'A deep dive into structuring large-scale Next.js 15 applications with TypeScript, Tailwind CSS, and Framer Motion for maximum performance and developer experience.',
    date: 'Feb 2025',
    readTime: '8 min read',
    tags: ['Next.js', 'TypeScript'],
    gradient: 'from-blue-500/20 to-violet-500/20',
    border: 'border-blue-500/20',
  },
  {
    slug: 'react-server-components',
    title: 'React Server Components Explained',
    excerpt:
      'Understanding when to use RSC vs client components, streaming, suspense boundaries, and the new data-fetching patterns that make React apps blazing fast.',
    date: 'Jan 2025',
    readTime: '6 min read',
    tags: ['React', 'Performance'],
    gradient: 'from-violet-500/20 to-pink-500/20',
    border: 'border-violet-500/20',
  },
  {
    slug: 'modern-api-design',
    title: 'Modern API Design with Node.js',
    excerpt:
      'Best practices for RESTful and GraphQL API design using Express, TypeScript, and PostgreSQL — with authentication, rate limiting, and observability baked in.',
    date: 'Dec 2024',
    readTime: '10 min read',
    tags: ['Node.js', 'API'],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    border: 'border-emerald-500/20',
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Writing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            From the Blog
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Thoughts on software development, engineering best practices, and the
            tools I rely on every day.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {POSTS.map((post) => (
            <motion.div
              key={post.slug}
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.article
                variants={cardHoverSm}
                className={`bg-slate-950 rounded-2xl p-6 border ${post.border} h-full flex flex-col hover:shadow-xl hover:shadow-black/40 transition-shadow duration-300`}
              >
                {/* Gradient accent strip */}
                <div
                  className={`h-1 w-12 rounded-full bg-gradient-to-r ${post.gradient} mb-5`}
                />

                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors no-underline mt-auto group"
                >
                  Read more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold rounded-xl transition-all hover:bg-slate-800/60 no-underline"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
