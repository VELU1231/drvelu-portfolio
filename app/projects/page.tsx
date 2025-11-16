import Footer from '../components/Footer';
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
    description: 'Enterprise-grade analytics platform providing real-time data visualization, predictive analytics, and customizable reporting for businesses.',
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
    description: 'Advanced AI tool for generating high-quality content with natural language processing, supporting multiple languages and content types.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    highlights: ['Multi-language Support', 'Content Templates', 'API Integration'],
    impact: 'Reduced content creation time by 70%',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Featured Projects</h1>
          <p className="text-xl text-gray-300">Explore my latest work and contributions to the tech community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-8 border border-cyan-500/30 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
              <h2 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-purple-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-900 rounded text-sm text-gray-300">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-green-400 mb-2">Highlights:</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center"><span className="mr-2">→</span>{highlight}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-yellow-400 italic">{project.impact}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
