'use client';

import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import Testimonials from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
