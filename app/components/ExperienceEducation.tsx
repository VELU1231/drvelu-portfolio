'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  Linkedin,
  Workflow,
} from 'lucide-react';

const experienceItems = [
  {
    title: 'Full-Stack Developer and Automation Builder',
    org: 'CreatorOS and Independent Projects',
    period: '2025 - Present',
    icon: Briefcase,
    points: [
      'Building and shipping modern web applications with React/Next.js.',
      'Creating n8n automations for lead routing, alerts, and data sync workflows.',
      'Integrating Firebase and Shopify services for real-world product needs.',
    ],
  },
  {
    title: 'Junior and Senior High School Teacher',
    org: 'Maranatha Christian Academy',
    period: 'Jul 2024 - Apr 2025',
    icon: Award,
    points: [
      'Taught Science, Math, and English for Grades 4-12.',
      'Designed structured lesson plans and student tracking systems.',
    ],
  },
];

const educationItems = [
  {
    title: 'BS Biology (Pre-Medicine)',
    org: 'Ago Medical and Educational Center',
    period: 'Oct 2021 - Aug 2024',
    icon: GraduationCap,
    points: ['GPA: 1.75/5.0', 'Strong research, data recording, and analysis foundation.'],
  },
  {
    title: 'Certifications',
    org: 'Deloitte, Google, and Vertex AI',
    period: '2025',
    icon: Award,
    points: [
      'Deloitte Data Analytics and Visualization (Forage)',
      'Google Analytics Certification (Skillshop)',
      'Prompt Design in Vertex AI (Google Cloud)',
    ],
  },
];

const quickSkills = [
  { label: 'React and Next.js', icon: Code2 },
  { label: 'Python and Node.js', icon: Database },
  { label: 'n8n Workflow Automation', icon: Workflow },
  { label: 'Firebase and Shopify Integration', icon: Database },
];

export function ExperienceEducation() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Background</p>
          <h2 className="display-title text-3xl sm:text-5xl text-slate-900 mb-4">
            Experience, education, and practical strengths.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            A simple overview of my developer journey, qualifications, and key tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1.1fr_0.8fr] gap-5">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-3xl p-5 sm:p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-5">Experience</h3>
            <div className="space-y-6">
              {experienceItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-sky-700">{item.org}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 sm:text-right">{item.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="glass-panel rounded-3xl p-5 sm:p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-5">Education and Certifications</h3>
            <div className="space-y-6">
              {educationItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{item.title}</p>
                        <p className="text-sm text-sky-700">{item.org}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 sm:text-right">{item.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="glass-panel rounded-3xl p-5 sm:p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-5">Quick Skills</h3>
            <div className="space-y-3">
              {quickSkills.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-sky-100 text-sky-700 grid place-items-center">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/velu-2k03"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-300"
            >
              <Linkedin className="h-4 w-4 text-sky-700" />
              LinkedIn Profile: velu-2k03
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
