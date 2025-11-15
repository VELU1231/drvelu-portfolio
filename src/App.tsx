/*
DrVelu Portfolio - Single-file React component (App.tsx)
Tailwind CSS required. This file is a ready-to-run React + TypeScript component you can drop into a Vite or Next.js app.

Usage:
- Create a new React app (Vite or Next.js) with TypeScript support.
- Install Tailwind CSS per official docs (https://tailwindcss.com/docs/installation).
- Replace src/App.tsx in your project with this file and run the dev server.

Notes:
- Replace placeholder links (support, project URLs) with your live links.
- The file is self-contained and typed. It removes all truncated placeholders and fixes invalid JSX/classNames.
*/

import React from "react";

type Project = {
  id: number;
  title: string;
  desc: string;
  url: string;
  img: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Word Puzzle — Speed Challenge",
    desc: "Guess 10 words in 60 seconds. Fast, mobile-friendly, addictive.",
    url: "#", // <-- replace with live project URL after deploying
    img:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc",
  },
  {
    id: 2,
    title: "Snake — Classic Browser",
    desc: "Retro snake gameplay, responsive and smooth on mobile.",
    url: "#",
    img:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=def",
  },
  {
    id: 3,
    title: "YouTube SEO Autotool",
    desc: "Generate optimized titles & tags in seconds.",
    url: "#",
    img:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ghi",
  },
];

const DrVeluPortfolio: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-500 flex items-center justify-center text-xl font-bold shadow-2xl">DV</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">DrVelu</h1>
            <p className="text-sm text-gray-400">Python · Web · Automation · Experiments</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:text-white/80">Projects</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white/80">About</a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white/80">Contact</a>
          <a
            href="https://ko-fi.com/yourname" /* replace with Ko-fi / BuyMeACoffee / Patreon link */
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-block px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg text-sm font-semibold shadow-lg hover:opacity-95"
          >
            Support
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="mb-12">
          <div className="rounded-2xl p-12 bg-gradient-to-br from-gray-900 via-black to-transparent shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hey, I’m Velu — I build useful web tools and playful micro‑apps.</h2>
                <p className="mt-4 text-gray-300 max-w-xl">Everything I ship is lightweight, mobile-friendly, and built to be useful. Explore small apps and projects you can try right now.</p>

                <div className="mt-6 flex gap-3">
                  <a href="#projects" className="inline-block px-5 py-3 bg-white text-black rounded-lg font-semibold shadow">View Projects</a>
                  <a href="#contact" className="inline-block px-5 py-3 border border-gray-700 rounded-lg text-gray-300">Contact</a>
                </div>
              </div>

              <div className="w-full md:w-80 h-48 md:h-56 rounded-lg overflow-hidden relative shadow-xl">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=zzzz" alt="hero" className="w-full h-full object-cover opacity-90"/>
                <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
                  <div className="mt-6 bg-black/40 px-4 py-2 rounded-md text-sm">drvelu.com — dev experiments</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Projects</h3>
            <p className="text-gray-400 mt-2">Click any project to open it in a new tab. All projects are free to try — support if you like them.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-purple-600 transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-44 md:h-40 lg:h-36">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  {/* Top-center overlay (user preference for text overlays in upper-middle/top-center) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-6 px-3 py-1 bg-black/60 rounded-full text-xs font-semibold">{p.title}</div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-gray-400">Playable · Free</div>
                    <div className="text-sm font-medium text-purple-400 group-hover:text-purple-300">Open ↗</div>
                  </div>
                </div>
              </a>
            ))}

            {/* Example placeholder card for adding more projects */}
            <div className="rounded-2xl border border-dashed border-gray-800 p-6 flex items-center justify-center text-center text-gray-500">
              <div>
                <div className="mb-2 font-semibold">Add Project</div>
                <div className="text-xs">Drop your live link into the projects array in code.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-12">
          <div className="rounded-xl p-6 bg-gray-900 border border-gray-800">
            <h3 className="font-bold text-xl">About</h3>
            <p className="text-gray-300 mt-3">
              I graduated in Biology and now design small, useful web experiences using Python + JavaScript. I teach, build, and iterate quickly — everything here is lightweight and designed for fast experimentation.
            </p>
            <ul className="mt-4 text-gray-400 space-y-1 text-sm">
              <li>• Skills: Python, Django basics, HTML/CSS, JavaScript</li>
              <li>• Interests: Data storytelling, game microapps, automation</li>
              <li>• Location: Santa Rosa, Laguna</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mb-6">
          <div className="rounded-xl p-6 bg-gray-900 border border-gray-800 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h4 className="font-bold text-lg">Contact</h4>
              <p className="text-gray-400 mt-2">
                Email: {" "}
                <a className="text-purple-300" href="mailto:velu2k03@gmail.com">
                  velu2k03@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                LinkedIn: {" "}
                <a
                  className="text-purple-300"
                  href="https://www.linkedin.com/in/velu-2k03"
                  target="_blank"
                  rel="noreferrer"
                >
                  velu-2k03
                </a>
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://ko-fi.com/yourname"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-semibold shadow"
              >
                Support
              </a>
              <a href="#projects" className="px-4 py-2 border border-gray-700 rounded-lg text-gray-300">
                See Projects
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} DrVelu · Built with curiosity and a laptop
        </footer>
      </main>
    </div>
  );
};

export default DrVeluPortfolio;
