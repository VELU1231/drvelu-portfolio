'use client';

import { Navbar } from './components/Navbar';
import Hero from './components/Hero';import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
              <Testimonials />
      <Footer />
    </main>
  );
}
