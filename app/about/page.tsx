'use client';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0f] text-white">
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-white/50"
            >
              A passionate full-stack developer dedicated to crafting innovative digital solutions
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">My Journey</h2>
            <div className="space-y-4 text-white/50 leading-relaxed text-sm">
              <p>I am a full-stack developer with a proven track record of building scalable, user-centric web applications. With expertise in Python, automation, and modern web technologies, I transform complex problems into elegant solutions.</p>
              <p>My journey began with curiosity about how things work. Over the years, I have honed my skills across the entire development stack. I am committed to continuous learning and staying at the forefront of industry trends.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-white">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: 'Frontend', color: 'violet', items: ['React & Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'] },
                { title: 'Backend', color: 'blue', items: ['Python & Django', 'Node.js', 'FastAPI', 'Web Scraping'] },
                { title: 'Tools', color: 'emerald', items: ['Git & GitHub', 'Docker', 'AWS', 'CI/CD'] },
              ].map((cat) => (
                <div key={cat.title} className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-4 text-white">{cat.title}</h3>
                  <ul className="space-y-2 text-white/50 text-sm">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-violet-400">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">{"Let's Work Together"}</h2>
          <p className="text-white/40 mb-8 max-w-2xl mx-auto text-sm">
            {"I'm always interested in new projects and opportunities. Feel free to reach out!"}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/" className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-xl font-semibold text-sm">
              Back to Home
            </a>
            <a href="/#contact" className="px-6 py-3 bg-white/[0.05] border border-white/[0.1] text-white/80 rounded-xl font-semibold text-sm">
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
