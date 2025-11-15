'use client';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velu - Professional Portfolio',
  description: 'Colorful and professional portfolio showcasing high-skill developer work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
