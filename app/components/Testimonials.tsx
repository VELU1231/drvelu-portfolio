'use client';

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
    testimonial: 'Velu delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise transformed our vision into reality. A true professional who understands both design and development.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'CEO',
    company: 'StartupX',
    testimonial: 'Working with Velu on our AI chat application was a game-changer. His ability to implement complex real-time features with WebSocket was impressive. Highly recommended for any ambitious project.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Data Analytics Lead',
    company: 'InsightHub',
    testimonial: 'The interactive dashboard Velu built for us provides real-time analytics that our team relies on daily. The performance optimization and responsive design are outstanding. Great work!',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    title: 'Operations Director',
    company: 'PlanMaster SaaS',
    testimonial: 'Velu created a task management platform that our entire organization uses daily. The Material-UI integration and user experience are seamless. He\'s a developer who truly cares about the end-user experience.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700 hover:border-accent-primary transition-colors">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-text-secondary mb-4 leading-relaxed">{testimonial.testimonial}</p>
    <div>
      <p className="font-semibold text-white">{testimonial.name}</p>
      <p className="text-sm text-text-secondary">
        {testimonial.title} at {testimonial.company}
      </p>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            What Clients Say
          </h2>
          <p className="text-text-secondary text-lg">
            Feedback from satisfied clients and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
