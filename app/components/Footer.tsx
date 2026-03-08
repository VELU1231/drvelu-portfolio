'use client';

import { Download, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/velu-2k03', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:velu2k03@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+639691559821', label: 'Phone' },
    { icon: Download, href: '/VELU-NEW-RESUME.pdf', label: 'Resume' },
  ];

  return (
    <footer className="pb-8 sm:pb-10 pt-6">
      <div className="section-wrap">
        <div className="glass-panel rounded-3xl px-6 py-8 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="display-title text-xl sm:text-2xl text-slate-900 mb-2">
              Velu Murugan
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Full-stack developer focused on Python, automation, and modern web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#skills', label: 'Skills' },
                { href: '#achievements', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <a href="/VELU-NEW-RESUME.pdf" download className="text-slate-600 hover:text-slate-900 transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/CV-VELU-MURUGAN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  CV (Detailed)
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="h-10 w-10 rounded-xl border border-slate-200 bg-white/85 grid place-items-center text-slate-700 hover:bg-slate-900 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 text-sm text-slate-600 justify-center md:justify-start">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>Santa Rosa City, Laguna, Philippines</span>
            </div>
          </motion.div>
          </div>

          <div className="border-t border-slate-200 pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-slate-600">
              &copy; {currentYear} Velu Murugan. All rights reserved.
            </p>
            <div className="text-sm text-slate-500">
              Portfolio crafted for full-stack developer opportunities.
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
