'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Palette, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    icon: Database,
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    icon: Palette,
    category: 'Design',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'CSS Animation', 'Framer Motion'],
  },
  {
    icon: Zap,
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'GitHub', 'CI/CD'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          My expertise spans across modern web development technologies and tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm bg-white/50 dark:bg-slate-700/50 text-gray-800 dark:text-gray-200 rounded-full border border-cyan-500/30 hover:border-cyan-500/70 hover:bg-cyan-500/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
