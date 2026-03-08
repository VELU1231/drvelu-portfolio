'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/VELU1231', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/velu', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:velu@drvelu.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#08080c]">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center font-bold text-white text-xs">
                V
              </div>
              <span className="font-semibold text-white">Velu Murugan</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting modern web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/40 hover:text-white/80 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Connect</h4>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  className="p-2.5 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/60" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Velu Murugan. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/30">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            </motion.span>
            by Velu
          </div>
        </div>
      </div>
    </footer>
  );
}
