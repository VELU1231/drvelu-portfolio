'use client';

import { motion } from 'framer-motion';
import { Download, FileText, MapPin, Mail, Phone } from 'lucide-react';

export function ResumeShowcase() {
  return (
    <section id="resume" className="py-20">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Resume</p>
          <h2 className="display-title text-4xl sm:text-5xl text-slate-900 mb-4">
            Download my latest resume files.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            No preview panel, just direct and fast downloads for recruiter screening.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-6 sm:p-8"
          >
            <div className="h-12 w-12 rounded-xl bg-sky-100 text-sky-700 grid place-items-center mb-5">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Resume Access</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Download or open my profile documents directly from this portfolio.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="/VELU-NEW-RESUME.pdf"
                download
                className="w-full inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
              >
                Resume (Concise)
                <Download className="h-4 w-4" />
              </a>
              <a
                href="/CV-VELU-MURUGAN.pdf"
                download
                className="w-full inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
              >
                CV (Detailed)
                <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Developer highlights include full-stack web app delivery, n8n automation workflows, Firebase-backed
                systems, Figma-to-code implementation, and Shopify integration experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Contact Snapshot</h3>
            <p className="text-slate-600 leading-relaxed mb-5">
              Quick details from my resume so hiring teams can identify role fit immediately.
            </p>

            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 flex items-center gap-3">
                <MapPin className="h-4 w-4 text-sky-700" />
                <span className="text-sm text-slate-700">Sorsogon, Bicol, Philippines</span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-700" />
                <span className="text-sm text-slate-700">contact@drvelu.com</span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-700" />
                <span className="text-sm text-slate-700">+63 960 718 0399</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
