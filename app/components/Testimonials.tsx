'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Product Manager',
    company: 'TechCorp Inc.',
    testimonial: 'Velu delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise transformed our vision into reality.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'CEO',
    company: 'StartupX',
    testimonial: 'Working with Velu on our AI chat application was a game-changer. His ability to implement complex real-time features was impressive. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Data Analytics Lead',
    company: 'InsightHub',
    testimonial: 'The interactive dashboard Velu built provides real-time analytics that our team relies on daily. The performance and responsive design are outstanding.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Operations Director',
    company: 'PlanMaster SaaS',
    testimonial: "Velu created a task management platform our entire organisation uses daily. The UX is seamless. He's a developer who truly cares about the end-user experience.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Feedback from people I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.testimonial}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{item.name}</p>
                  <p className="text-slate-500 text-xs">
                    {item.title} · {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
