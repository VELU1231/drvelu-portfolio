'use client';

import { motion } from 'framer-motion';
import { Download, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="section-wrap text-center mb-14"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Contact</p>
        <h2 className="display-title text-4xl sm:text-5xl text-slate-900 mb-4">
          Let us build something meaningful.
        </h2>
        <p className="text-slate-600 text-lg">
          I&apos;m open to full-stack developer roles, freelance projects, and automation collaborations.
        </p>
      </motion.div>

      <div className="section-wrap grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Send a message</h3>
          <p className="text-slate-600 mb-6">I will respond as soon as possible.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 resize-none"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-emerald-600 text-center font-semibold"
              >
                Message sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 space-y-7"
        >
          <h3 className="text-2xl font-semibold text-slate-900">Direct channels</h3>

          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
              <a href="mailto:velu2k03@gmail.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                velu2k03@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
              <a href="tel:+639691559821" className="text-slate-600 hover:text-slate-900 transition-colors">
                +63 969 155 9821
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
              <p className="text-slate-600">Santa Rosa City, Laguna, Philippines</p>
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <p className="font-semibold text-slate-900">Quick actions</p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/velu-2k03"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="h-11 w-11 rounded-xl border border-slate-200 bg-white/85 grid place-items-center text-slate-700 hover:bg-slate-900 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:velu2k03@gmail.com"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="h-11 w-11 rounded-xl border border-slate-200 bg-white/85 grid place-items-center text-slate-700 hover:bg-slate-900 hover:text-white transition"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/VELU-NEW-RESUME.pdf"
                download
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="h-11 w-11 rounded-xl border border-slate-200 bg-white/85 grid place-items-center text-slate-700 hover:bg-slate-900 hover:text-white transition"
              >
                <Download className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
