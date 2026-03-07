'use client';

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    { href: '#contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 no-underline group">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="font-bold text-lg text-white">Velu</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full-stack developer building fast, accessible, and beautiful web applications.
            </p>
          </div>

          {/* Nav + Social */}
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-500 hover:text-white transition-colors text-sm no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Social</h4>
              <div className="flex flex-col gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm no-underline"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-sm">
            © {currentYear} Velu Murugan. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </motion.span>
            by Velu
          </div>
        </div>
      </div>
    </footer>
  );
}
