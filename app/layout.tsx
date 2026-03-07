import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velu — Full-Stack Developer',
  description: 'Full-stack developer specialised in React, Next.js, and Node.js. Building fast, accessible, and beautiful web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
