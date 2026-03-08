'use client';

import { motion } from 'framer-motion';
import { BarChart3, FlaskConical, GraduationCap, Wrench, ArrowUpRight } from 'lucide-react';

const skillCategories = [
  {
    icon: BarChart3,
    category: 'Frontend Engineering',
    summary: 'Building fast, polished interfaces with modern component architecture.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma'],
  },
  {
    icon: FlaskConical,
    category: 'Backend and APIs',
    summary: 'Scalable server-side systems and secure API-first application design.',
    skills: ['Python', 'Node.js', 'FastAPI', 'Django', 'Firebase', 'REST APIs'],
  },
  {
    icon: GraduationCap,
    category: 'Automation and Productivity',
    summary: 'Automating repetitive workflows to increase delivery speed and reliability.',
    skills: ['n8n', 'Python Automation', 'Scripting', 'Data Pipelines', 'Webhooks', 'AI-assisted tools'],
  },
  {
    icon: Wrench,
    category: 'Cloud and Dev Workflow',
    summary: 'Production-ready deployment pipelines and collaboration best practices.',
    skills: ['Git', 'GitHub', 'Vercel', 'Docker', 'Shopify', 'CI/CD'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="section-wrap text-center mb-14"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Capabilities</p>
        <h2 className="display-title text-4xl sm:text-5xl text-slate-900 mb-4">
          Full-stack skills for modern web products.
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          I design, build, and deploy complete web applications with a focus on performance and automation.
        </p>
      </motion.div>

      <div className="section-wrap grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="glass-panel rounded-3xl p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
                  <IconComponent className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-300" />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {category.category}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {category.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs sm:text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
