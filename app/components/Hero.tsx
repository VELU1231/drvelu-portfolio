'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Download, Linkedin, MapPin, Sparkles, Workflow } from 'lucide-react';

const heroRevealAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.75, ease: 'easeOut' },
};

const portraitFloatAnimation = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
};

const lowerAmbientAnimation = {
  animate: { opacity: [0.45, 0.85, 0.45], scaleX: [0.95, 1.04, 0.95] },
  transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
};

export default function Hero() {
  return (
    <section id="home" className="relative pb-8">
      <div className="section-wrap">
        <div className="glass-panel soft-grid rounded-[2rem] p-6 md:p-10 lg:p-12 overflow-hidden relative">
          <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl animate-pulse-halo" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl animate-pulse-halo" />

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <motion.div {...heroRevealAnimation} className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full glass-chip px-4 py-2 text-sm font-semibold text-sky-700">
                <Sparkles className="h-4 w-4" />
                Full-Stack Developer and Automation Builder
              </div>

              <h1 className="display-title text-3xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
                Hi, I&apos;m Velu Murugan, I build
                <br />
                intelligent web apps
                <br />
                and automation tools.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Full-stack developer focused on Python, automation, and modern web applications.
              </p>

              <div className="flex flex-wrap items-center gap-2 text-slate-500 text-sm sm:text-base leading-relaxed">
                <MapPin className="h-4 w-4 text-sky-600" />
                Santa Rosa City, Laguna, Philippines
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <Stat label="Apps Built" value="12+" />
                <Stat label="Automations" value="30+" />
                <Stat label="Focus" value="Full-Stack" />
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-2">
                <a
                  href="/VELU-NEW-RESUME.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/velu-2k03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>

            <motion.div
              {...heroRevealAnimation}
              transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
              className="relative h-[330px] sm:h-[420px] lg:h-[520px]"
            >
              <div className="absolute inset-2 rounded-[2rem] border border-white/85 bg-white/40 shadow-[0_24px_60px_rgba(148,163,184,0.28)] backdrop-blur-xl" />
              <div className="absolute inset-6 rounded-[1.8rem] border border-slate-200/70" />
              <div className="absolute inset-x-12 top-12 h-[68%] rounded-full bg-gradient-to-b from-sky-200/55 to-blue-300/35 blur-2xl" />

              <motion.div
                className="absolute inset-x-8 bottom-9 top-14 sm:bottom-10 sm:top-16 lg:bottom-12"
                {...portraitFloatAnimation}
              >
                <Image
                  src="/images/velu-casual-transparent.png"
                  alt="Velu Murugan standing portrait"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-contain object-bottom"
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute left-10 right-10 bottom-4 h-16 rounded-full bg-gradient-to-r from-transparent via-sky-300/45 to-transparent blur-2xl"
                {...lowerAmbientAnimation}
              />

              <motion.div
                className="absolute left-5 bottom-5 glass-chip rounded-xl px-3 py-2 shadow-glass"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Code2 className="h-3.5 w-3.5 text-sky-700" />
                  Web Apps
                </div>
              </motion.div>

              <motion.div
                className="absolute right-8 bottom-7 glass-chip rounded-xl px-3 py-2 shadow-glass"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28 }}
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Workflow className="h-3.5 w-3.5 text-sky-700" />
                  Automation
                </div>
              </motion.div>

              <motion.div
                className="absolute right-4 top-4 glass-chip rounded-2xl px-3 py-3 shadow-glass"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/velu-formal-portrait.jpg"
                    alt="Velu Murugan formal portrait"
                    width={56}
                    height={76}
                    sizes="56px"
                    className="rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Focused On</p>
                    <p className="text-sm font-semibold text-slate-800">Python, Next.js, Automation</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-chip rounded-xl px-3 py-3 sm:py-4 text-center border border-white/80">
      <p className="text-xl sm:text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs sm:text-sm text-slate-500">{label}</p>
    </div>
  );
}
