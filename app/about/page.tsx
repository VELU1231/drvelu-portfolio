'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const timeline = [
  {
    role: 'Full-Stack Developer and Automation Builder',
    place: 'CreatorOS and Independent Projects',
    date: '2025 - Present',
    points: [
      'Built CreatorOS (creatoros.drvelu.com) with modern UI, motion, and conversion-first sections.',
      'Created n8n workflows for automation, lead routing, and task orchestration.',
      'Integrated tools across Firebase, Figma, and Shopify for faster product delivery.',
    ],
  },
  {
    role: 'Junior and Senior High School Teacher',
    place: 'Maranatha Christian Academy, Cabuyao',
    date: 'Jul 2024 - Apr 2025',
    points: [
      'Taught Science, Math, and English for Grades 4-12.',
      'Developed lesson plans aligned with DepEd K-12 standards.',
      'Mentored over 100 students and tracked progress using data-informed assessments.',
    ],
  },
  {
    role: 'Laboratory Intern',
    place: 'Ago General Hospital, Legazpi City',
    date: 'Oct 2023 - Dec 2023',
    points: [
      'Supported sample collection, routine diagnostics, and microscopy workflows.',
      'Maintained clean documentation and data recording practices.',
      'Assisted with compliance to laboratory safety standards.',
    ],
  },
  {
    role: 'BS Biology (Pre-Medicine)',
    place: 'Ago Medical and Educational Center',
    date: 'Oct 2021 - Aug 2024',
    points: [
      'Graduated with GPA 1.75/5.0.',
      'Built a strong analytical foundation in biology and scientific research.',
      'Applied statistics and structured observation in laboratory projects.',
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16">
        <section className="pt-8 pb-14">
          <div className="section-wrap">
            <div className="glass-panel rounded-[2rem] p-6 md:p-10 lg:p-12 overflow-hidden relative">
              <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
              <div className="relative z-10 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">About Velu</p>
                  <h1 className="display-title text-4xl sm:text-5xl text-slate-900 leading-tight">
                    A full-stack developer building modern apps and workflows.
                  </h1>
                  <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                    I build intelligent web applications and automation tools with a practical, product-first mindset.
                    My stack includes Next.js, Python, n8n, Firebase, Figma, and Shopify integrations.
                  </p>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Alongside development, my background in science and teaching shaped strong problem-solving,
                    communication, and execution skills that I bring into every project.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="glass-chip rounded-2xl overflow-hidden border border-white/80 col-span-2">
                    <div className="relative h-56 sm:h-64">
                      <Image src="/images/velu-formal-pose.jpg" alt="Velu Murugan formal pose" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="glass-chip rounded-2xl overflow-hidden border border-white/80">
                    <div className="relative h-40 sm:h-44">
                      <Image src="/images/velu-formal-stage.jpg" alt="Velu Murugan profile" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="glass-chip rounded-2xl overflow-hidden border border-white/80">
                    <div className="relative h-40 sm:h-44">
                      <Image src="/images/velu-casual-stage.jpg" alt="Velu Murugan casual portrait" fill className="object-cover" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="section-wrap">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Experience Timeline</p>
              <h2 className="display-title text-4xl sm:text-5xl text-slate-900">Developer and product journey.</h2>
            </div>

            <div className="space-y-5">
              {timeline.map((item, index) => (
                <motion.article
                  key={item.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="glass-panel rounded-3xl p-6 sm:p-7"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                    <span className="text-sm font-medium text-slate-500">{item.date}</span>
                  </div>
                  <p className="mt-1 text-sky-700 font-medium">{item.place}</p>
                  <ul className="mt-4 space-y-2 text-slate-600 leading-relaxed">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
