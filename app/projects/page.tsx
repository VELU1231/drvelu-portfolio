'use client';

import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Projects - Velu | Professional Portfolio',
  description: 'Explore my portfolio of successful projects showcasing full-stack development expertise, innovative solutions, and technical excellence in building scalable applications.',
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution featuring real-time inventory management, secure payment processing, and advanced search capabilities.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      highlights: ['Real-time Inventory', 'Payment Integration', 'Admin Dashboard'],
      impact: 'Increased conversion rate by 40% with optimized UX',
    },
    {
      id: 2,
      title: 'SaaS Analytics Dashboard',
      description: 'Enterprise-grade analytics platform providing real-time data visualization, predictive analytics, and customizable reporting for B2B clients.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
      highlights: ['Real-time Analytics', 'Custom Reports', 'Data Security'],
      impact: 'Served 500+ enterprise clients with 99.9% uptime',
    },
    {
      id: 3,
      title: 'Mobile App - Fitness Tracker',
      description: 'Cross-platform mobile application for fitness tracking with machine learning-powered workout recommendations and community features.',
      technologies: ['React Native', 'Firebase', 'ML Kit', 'Redux'],
      highlights: ['Offline Sync', 'ML Recommendations', 'Social Features'],
      impact: '50k+ downloads with 4.8-star rating',
    },
    {
      id: 4,
      title: 'AI-Powered Content Generator',
      description: 'Intelligent content generation tool utilizing advanced NLP and machine learning to create optimized marketing copy and SEO-friendly content.',
      technologies: ['Python', 'GPT API', 'FastAPI', 'React'],
      highlights: ['AI Integration', 'Content Optimization', 'Batch Processing'],
      impact: 'Reduced content creation time by 70%',
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">My Projects</h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl">A curated selection of my most impactful projects that demonstrate technical expertise, innovative problem-solving, and commitment to delivering exceptional results.</p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-200 mb-3 uppercase tracking-widest">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-blue-300 text-sm rounded border border-slate-600 hover:border-blue-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-sm text-purple-400 font-medium italic">🌟 {project.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-gray-300 text-lg mb-8">Let's collaborate on your next project and create exceptional digital experiences together.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
