import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Velu Murugan | Full-Stack Developer Portfolio',
  description:
    'Apple-inspired professional portfolio of Velu Murugan. Full-stack developer focused on Python, automation, and modern web applications.',
  openGraph: {
    title: 'Velu Murugan | Full-Stack Developer Portfolio',
    description:
      'Professional portfolio showcasing Velu Murugan\'s full-stack projects, automation workflows, and resume.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
