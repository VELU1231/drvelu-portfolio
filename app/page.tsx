'use client';

import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { Projects } from './components/Projects';
import FeaturedProject from './components/FeaturedProject';
import { Skills } from './components/Skills';
import Blog from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Projects />
      <FeaturedProject />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
