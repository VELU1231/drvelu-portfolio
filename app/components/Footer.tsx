'use client';

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:velu@example.com', label: 'Email' },
  ];

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 no-underline group">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-9 h-9 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold">V</span>
              </motion.div>
              <span className="font-bold text-lg text-white">Velu</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full-stack developer building fast, accessible, and beautiful web applications.
            </p>
          </motion.div>

          {/* Nav + Social */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="inline-block"
                    >
                      <Link
                        href={link.href}
                        className="text-slate-500 hover:text-white transition-colors text-sm no-underline"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Social</h4>
              <div className="flex flex-col gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ x: 4, color: '#fff' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm no-underline"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: -6 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.span>
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <p className="text-slate-600 text-sm">
            © {currentYear} Velu Murugan. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </motion.span>
            by Velu
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

