import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'About Me | Velu Murugan - Full-Stack Developer',
  description: 'Learn about my journey as a full-stack developer, my expertise in modern web technologies, and my passion for creating exceptional digital experiences.',
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A passionate full-stack developer dedicated to crafting innovative digital solutions
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">My Journey</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I am a full-stack developer with a proven track record of building scalable, user-centric web applications. 
                With expertise in modern web technologies, I transform complex problems into elegant solutions that drive business value.
              </p>
              <p>
                My journey in software development began with a curiosity about how things work. Over the years, I have honed my skills 
                across the entire development stack, from backend architecture to frontend design. I am committed to continuous learning 
                and staying at the forefront of industry trends.
              </p>
              <p>
                I specialize in creating high-performance applications that not only meet technical requirements but also provide exceptional 
                user experiences. My approach combines strategic thinking with technical excellence to deliver solutions that make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-700/50 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ React, Next.js, Vue.js</li>
                  <li>✓ TypeScript, JavaScript</li>
                  <li>✓ Tailwind CSS, Styled Components</li>
                  <li>✓ UI/UX Implementation</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Backend Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Node.js, Express.js</li>
                  <li>✓ Database Design (SQL & NoSQL)</li>
                  <li>✓ REST & GraphQL APIs</li>
                  <li>✓ Cloud Deployment (AWS, Vercel)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
