'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHoverSm, iconHover } from '../lib/animations';

const skillCategories = [
  {
    icon: Code2,
    category: 'Frontend',
    color: 'blue',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion'],
  },
  {
    icon: Database,
    category: 'Backend',
    color: 'violet',
    skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs'],
  },
  {
    icon: Cloud,
    category: 'DevOps',
    color: 'emerald',
    skills: ['Docker', 'Vercel', 'AWS', 'CI/CD', 'GitHub Actions', 'Linux'],
  },
  {
    icon: Wrench,
    category: 'Tools',
    color: 'amber',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman', 'Jira'],
  },
];

const colorMap: Record<string, { border: string; iconBg: string; badge: string }> = {
  blue:    { border: 'border-blue-500/20',    iconBg: 'bg-blue-600',    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
  violet:  { border: 'border-violet-500/20',  iconBg: 'bg-violet-600',  badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  emerald: { border: 'border-emerald-500/20', iconBg: 'bg-emerald-600', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
  amber:   { border: 'border-amber-500/20',   iconBg: 'bg-amber-600',   badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Technologies and tools I use to build production-grade applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  variants={cardHoverSm}
                  className={`bg-slate-950 rounded-2xl p-5 border ${colors.border} transition-colors duration-300 hover:shadow-lg hover:shadow-black/30 h-full`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      variants={iconHover}
                      className={`p-2.5 ${colors.iconBg} rounded-xl`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-base font-bold text-white">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-0.5 text-xs font-medium border rounded-full ${colors.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

