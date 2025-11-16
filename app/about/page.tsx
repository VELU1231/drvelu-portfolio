import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">About Me</h1>
            <p className="text-xl text-gray-300 mb-8">A passionate full-stack developer dedicated to crafting innovative digital solutions</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-400">My Journey</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>I am a full-stack developer with a proven track record of building scalable, user-centric web applications. With expertise in modern web technologies, I transform complex problems into elegant solutions that drive business value.</p>
              <p>My journey in software development began with a curiosity about how things work. Over the years, I have honed my skills across the entire development stack, from backend architecture to frontend design. I am committed to continuous learning and staying at the forefront of industry trends.</p>
              <p>I believe in writing clean, maintainable code and following best practices. My approach to development is collaborative, creative, and driven by a passion for creating exceptional user experiences.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-lg p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ React & Next.js</li>
                  <li>✓ TypeScript</li>
                  <li>✓ Tailwind CSS</li>
                  <li>✓ Framer Motion</li>
                  <li>✓ Redux & State Management</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6 border border-cyan-500/30">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Backend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Node.js & Express</li>
                  <li>✓ Python & FastAPI</li>
                  <li>✓ MongoDB & PostgreSQL</li>
                  <li>✓ RESTful APIs</li>
                  <li>✓ Authentication & Security</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6 border border-green-500/30">
                <h3 className="text-xl font-bold mb-4 text-green-300">Tools & Platforms</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Git & GitHub</li>
                  <li>✓ Docker & DevOps</li>
                  <li>✓ AWS & Cloud Services</li>
                  <li>✓ CI/CD Pipelines</li>
                  <li>✓ Firebase & Supabase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-blue-400">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-white mb-2">Senior Full-Stack Developer</h3>
                <p className="text-blue-300 mb-2">Tech Innovations Inc. | 2022 - Present</p>
                <p className="text-gray-300">Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the organization.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-white mb-2">Full-Stack Developer</h3>
                <p className="text-purple-300 mb-2">Digital Solutions Ltd. | 2020 - 2022</p>
                <p className="text-gray-300">Developed and maintained multiple client projects using modern tech stack, improved performance by 40%, and reduced deployment time by 60%.</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-white mb-2">Junior Developer</h3>
                <p className="text-cyan-300 mb-2">StartUp Ventures | 2019 - 2020</p>
                <p className="text-gray-300">Built responsive web applications, collaborated with cross-functional teams, and learned industry best practices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-200">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors">Back to Home</a>
            <a href="#contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-colors">Get in Touch</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
