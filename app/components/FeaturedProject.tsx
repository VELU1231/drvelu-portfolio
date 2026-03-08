'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, Sparkles } from 'lucide-react';

const techStack = ['Next.js', 'React', 'Python', 'AI/ML', 'TailwindCSS', 'PostgreSQL'];

export default function FeaturedProject() {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.03] to-transparent pointer-events-none" />

      <div className="section-container relative">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 tracking-wider uppercase mb-3">
            <Star size={14} className="fill-violet-400" />
            Featured Product
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            CreatorOS
          </h2>
        </motion.div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="glass-card overflow-hidden max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Screenshot */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src="https://github.com/user-attachments/assets/9c8616e3-4e6c-47a1-9c8d-e04a09190983"
                alt="CreatorOS - AI-Powered Content Creation Platform"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0f]/50 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent md:hidden" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={18} className="text-violet-400" />
                <span className="text-violet-400 text-sm font-semibold">
                  AI-Powered Platform
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                CreatorOS
              </h3>

              <p className="text-white/50 leading-relaxed mb-6">
                AI-powered content creation platform for Gen-Z creators. Generate viral hooks,
                stunning thumbnails, and engaging content for YouTube, TikTok, and Instagram in seconds.
                Serving 120K+ creators with a 4.9/5 rating.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs bg-violet-500/10 text-violet-300 rounded-lg border border-violet-500/15 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="https://creatoros.drvelu.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-shadow w-fit"
              >
                Visit CreatorOS
                <ExternalLink size={15} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
