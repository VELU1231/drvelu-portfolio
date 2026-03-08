'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const workflowToolset = [
  {
    name: 'n8n',
    icon: '/images/logos/n8n.svg',
    detail: 'Workflow orchestration and no-code automation pipelines.',
  },
  {
    name: 'Firebase',
    icon: '/images/logos/firebase.svg',
    detail: 'Realtime backend services, auth, and cloud-hosted data.',
  },
  {
    name: 'Figma',
    icon: '/images/logos/figma.svg',
    detail: 'UI wireframing and interface prototyping before coding.',
  },
  {
    name: 'Shopify',
    icon: '/images/logos/shopify.svg',
    detail: 'E-commerce customization and storefront workflow integration.',
  },
];

export default function Testimonials() {
  return (
    <section id="workflow" className="py-20">
      <div className="section-wrap">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Developer Workflow</p>
          <h2 className="display-title text-4xl sm:text-5xl text-slate-900 mb-4">
            From interface design to production automation.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            My stack combines UI engineering, backend services, and automated workflows for fast product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-3xl overflow-hidden"
          >
            <div className="relative h-72 sm:h-80 border-b border-slate-200/60 bg-white/90">
              <Image
                src="/images/workflows/n8n-workflow.svg"
                alt="n8n workflow visual"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain p-6"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-900">Automation-first architecture</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                I use n8n workflows to connect apps, trigger webhooks, sync data, and reduce repetitive manual work in
                product operations.
              </p>
            </div>
          </motion.article>

          <div className="space-y-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="glass-panel rounded-3xl overflow-hidden"
            >
              <div className="relative h-52 border-b border-slate-200/60">
                <Image
                  src="/images/workflows/developer-workflow.jpg"
                  alt="Developer workflow workspace"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">Build, ship, iterate</h3>
                <p className="mt-2 text-slate-600">
                  Full-stack delivery loop with modern tooling, deployment pipelines, and rapid iteration.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="glass-panel rounded-3xl p-5"
            >
              <h3 className="text-xl font-semibold text-slate-900">Core tools I use</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {workflowToolset.map((tool) => (
                  <div key={tool.name} className="rounded-2xl border border-slate-200 bg-white/85 p-3">
                    <div className="flex items-center gap-3">
                      <Image src={tool.icon} alt={`${tool.name} logo`} width={26} height={26} sizes="26px" />
                      <p className="font-semibold text-slate-900">{tool.name}</p>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{tool.detail}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
