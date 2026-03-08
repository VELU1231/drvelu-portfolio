'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
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
    <section id="contact" className="py-20 md:py-28">
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
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {"Let's Work Together"}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {"I'm always interested in hearing about new projects and opportunities."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/30 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-colors text-sm"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/30 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-colors text-sm"
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/30 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-colors resize-none text-sm"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-shadow border-none"
              >
                <Send size={15} />
                Send Message
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-center text-sm font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-lg font-semibold text-white mb-1">
                Contact Details
              </h3>

              <a
                href="mailto:velu@drvelu.com"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                  <Mail size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-0.5">Email</p>
                  <p className="text-sm text-white/70">velu@drvelu.com</p>
                </div>
              </a>

              <a
                href="https://github.com/VELU1231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-white/[0.05] group-hover:bg-white/[0.1] transition-colors">
                  <Github size={18} className="text-white/70" />
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-0.5">GitHub</p>
                  <p className="text-sm text-white/70">github.com/VELU1231</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/velu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-0.5">LinkedIn</p>
                  <p className="text-sm text-white/70">linkedin.com/in/velu</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
