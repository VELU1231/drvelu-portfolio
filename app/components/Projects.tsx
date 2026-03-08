'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, Layers, ShoppingBag } from 'lucide-react';
import type { ComponentType } from 'react';

type ProjectBadge = {
  name: string;
  icon: string;
};

type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  date: string;
  icon: ComponentType<{ className?: string }>;
  image: string;
  link: string;
  imageFit?: 'cover' | 'contain';
  connectedApps: ProjectBadge[];
  technologyStack: ProjectBadge[];
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'CreatorOS Platform',
    description:
      'AI-powered creator toolkit with modern landing experience, conversion-focused UX, and modular feature blocks for content creators.',
    outcome: 'Client outcome: clear product messaging for creators across YouTube, TikTok, and Instagram workflows.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'UI Engineering'],
    date: 'Featured Project',
    icon: Layers,
    image: '/images/screenshots/creatoros-hero-crop.png',
    link: 'https://creatoros.drvelu.com',
    imageFit: 'contain',
    connectedApps: [
      { name: 'YouTube', icon: '/images/logos/youtube.svg' },
      { name: 'TikTok', icon: '/images/logos/tiktok.svg' },
      { name: 'Instagram', icon: '/images/logos/instagram.svg' },
    ],
    technologyStack: [
      { name: 'Next.js', icon: '/images/logos/nextjs.svg' },
      { name: 'React', icon: '/images/logos/react.svg' },
      { name: 'TypeScript', icon: '/images/logos/typescript.svg' },
    ],
  },
  {
    id: 2,
    title: 'n8n Automation Workflows',
    description:
      'Workflow automation flows for lead intake, notifications, and data sync between apps using no-code orchestration and API triggers.',
    outcome: 'Client outcome: fewer manual steps, faster response time, and reliable app-to-app automation.',
    tags: ['n8n', 'Webhooks', 'Automation', 'Integrations'],
    date: 'Automation Stack',
    icon: Bot,
    image: '/images/workflows/n8n-workflow.svg',
    link: 'https://n8n.io/workflows/',
    imageFit: 'contain',
    connectedApps: [
      { name: 'Gmail', icon: '/images/logos/gmail.svg' },
      { name: 'Notion', icon: '/images/logos/notion.svg' },
      { name: 'Stripe', icon: '/images/logos/stripe.svg' },
    ],
    technologyStack: [
      { name: 'n8n', icon: '/images/logos/n8n.svg' },
      { name: 'Python', icon: '/images/logos/python.svg' },
      { name: 'Node.js', icon: '/images/logos/nodejs.svg' },
    ],
  },
  {
    id: 3,
    title: 'Shopify and Firebase Integrations',
    description:
      'Built e-commerce support components, admin utilities, and backend data sync patterns connecting storefront logic with cloud data storage.',
    outcome: 'Client outcome: easier product operations, safer checkout flows, and synchronized customer data.',
    tags: ['Shopify', 'Firebase', 'Cloud Functions', 'Dashboard'],
    date: 'Production Experience',
    icon: ShoppingBag,
    image: '/images/workflows/developer-workflow.jpg',
    link: 'https://www.shopify.com',
    connectedApps: [
      { name: 'Shopify', icon: '/images/logos/shopify.svg' },
      { name: 'Firebase', icon: '/images/logos/firebase.svg' },
      { name: 'Stripe', icon: '/images/logos/stripe.svg' },
    ],
    technologyStack: [
      { name: 'React', icon: '/images/logos/react.svg' },
      { name: 'Node.js', icon: '/images/logos/nodejs.svg' },
      { name: 'TypeScript', icon: '/images/logos/typescript.svg' },
    ],
  },
];

export function Projects() {
  return (
    <section id="achievements" className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="section-wrap text-center mb-14"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Projects</p>
        <h2 className="display-title text-3xl sm:text-5xl text-slate-900 mb-4">
          Full-stack products and automation builds.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          A focused selection of developer projects with modern web architecture and automation-first workflows.
        </p>
      </motion.div>

      <div className="section-wrap grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {portfolioProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="glass-panel rounded-3xl overflow-hidden"
          >
            <div className="relative h-44 sm:h-48 border-b border-slate-200/60 bg-white/70">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className={project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}
              />
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="h-11 w-11 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
                  <project.icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-slate-500 text-right">
                  {project.date}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{project.description}</p>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">{project.outcome}</p>

              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-2">Connected Apps</p>
                <div className="flex flex-wrap gap-2">
                  {project.connectedApps.map((app) => (
                    <span
                      key={`${project.id}-app-${app.name}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 whitespace-nowrap"
                    >
                      <Image src={app.icon} alt={`${app.name} logo`} width={14} height={14} />
                      {app.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologyStack.map((item) => (
                    <span
                      key={`${project.id}-stack-${item.name}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 whitespace-nowrap"
                    >
                      <Image src={item.icon} alt={`${item.name} logo`} width={14} height={14} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900"
                >
                  Open project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
