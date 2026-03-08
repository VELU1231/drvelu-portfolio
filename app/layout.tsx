import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velu Murugan — Full-Stack Developer Portfolio',
  description: 'Full-stack developer focused on Python, automation, and modern web applications. Building intelligent web apps and automation tools.',
  keywords: ['developer', 'portfolio', 'python', 'react', 'next.js', 'automation', 'full-stack'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
