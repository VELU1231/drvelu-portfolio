'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#achievements', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50"
    >
      <div className="section-wrap py-4">
        <div className="glass-panel rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden shadow-glass">
              <Image
                src="/images/logos/velu-logo.svg"
                alt="Velu Murugan personal logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-900">Velu Murugan</p>
              <p className="text-xs text-slate-500">Full-Stack Developer Portfolio</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.href} href={link.href}>
                {link.label}
              </NavigationLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/VELU-NEW-RESUME.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium transition hover:bg-slate-700"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/85 text-slate-700"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-3 glass-panel rounded-2xl p-4"
            >
              <div className="grid gap-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/VELU-NEW-RESUME.pdf"
                  download
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
      {children}
    </Link>
  );
}
