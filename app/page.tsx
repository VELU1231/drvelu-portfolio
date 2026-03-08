'use client';

import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Testimonials from './components/Testimonials';
import { ResumeShowcase } from './components/ResumeShowcase';
import { ExperienceEducation } from './components/ExperienceEducation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <ExperienceEducation />
      <Testimonials />
      <ResumeShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
