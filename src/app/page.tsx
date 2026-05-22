import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Minimal UI Kit',
    description: 'A carefully crafted collection of reusable UI components for modern web applications.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description: 'Beautiful and intuitive admin dashboard for managing your online store.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI integration and smooth animations.',
    tags: ['React', 'OpenAI', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Showcase your work with this elegant and responsive portfolio template.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Social Media Feed',
    description: 'Infinite scrolling feed with like, comment, and share functionality.',
    tags: ['React', 'GraphQL', 'Apollo'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-light tracking-tight">Portfolio</h1>
              <p className="text-gray-600 mt-1 text-xs">Showcasing my work and projects.</p>
            </div>
            <nav className="space-x-6 text-sm">
              <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">Home</Link>
              <Link href="/posts" className="text-gray-900 hover:text-gray-600 transition-colors">Posts</Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600 transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3 p-10 md:p-12">
                <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
                  Hi, I'm Alex Chen
                </h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Full-stack developer passionate about building beautiful, functional, and accessible web applications. 
                  I love turning complex problems into simple, elegant solutions.
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker'].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've worked on. Each one represents a different approach and challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-200 mt-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <p className="text-sm text-gray-600">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
