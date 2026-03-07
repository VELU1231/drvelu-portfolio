'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer, cardHoverSm, staggerFast } from '../lib/animations';

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

const starVariant = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 500, damping: 18 },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
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

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {TESTIMONIALS.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                variants={cardHoverSm}
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors h-full"
              >
                {/* Stars with stagger entry */}
                <motion.div
                  className="flex gap-0.5 mb-4"
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <motion.span key={i} variants={starVariant}>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.testimonial}</p>
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  >
                    {item.name[0]}
                  </motion.div>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.name}</p>
                    <p className="text-slate-500 text-xs">
                      {item.title} · {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

