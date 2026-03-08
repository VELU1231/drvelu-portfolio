'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    category: 'Frontend',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
    badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/15',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'HTML/CSS'],
  },
  {
    icon: Server,
    category: 'Backend',
    color: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: 'border-emerald-500/20 hover:border-emerald-500/40',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/15',
    skills: ['Python', 'Django', 'Node.js', 'FastAPI', 'Web Scraping', 'Automation'],
  },
  {
    icon: Cloud,
    category: 'DevOps',
    color: 'from-orange-500/20 to-orange-600/10',
    borderColor: 'border-orange-500/20 hover:border-orange-500/40',
    badgeBg: 'bg-orange-500/10 text-orange-300 border-orange-500/15',
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx', 'Vercel'],
  },
  {
    icon: Wrench,
    category: 'Tools',
    color: 'from-violet-500/20 to-violet-600/10',
    borderColor: 'border-violet-500/20 hover:border-violet-500/40',
    badgeBg: 'bg-violet-500/10 text-violet-300 border-violet-500/15',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'MongoDB'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
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
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 border ${category.borderColor} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-xs rounded-lg border font-medium cursor-default ${category.badgeBg}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
