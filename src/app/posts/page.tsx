import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Art of Simplicity',
    date: 'May 20, 2026',
    excerpt: 'Exploring how minimalism can transform not just design, but every aspect of creative work.',
  },
  {
    id: 2,
    title: 'Typography Matters',
    date: 'May 15, 2026',
    excerpt: 'Why the right font choice can make or break your entire design system.',
  },
  {
    id: 3,
    title: 'Building for the Future',
    date: 'May 10, 2026',
    excerpt: 'Thoughts on creating durable, timeless software in an ever-changing landscape.',
  },
];

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-light tracking-tight">Posts</h1>
              <p className="text-gray-600 mt-1 text-xs">Thoughts, stories, and ideas.</p>
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
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <time className="text-xs text-gray-600 uppercase tracking-widest">{post.date}</time>
              <h2 className="text-2xl mt-3 group-hover:text-blue-600 transition-colors">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">{post.excerpt}</p>
              <Link 
                href={`/posts/${post.id}`}
                className="inline-block mt-4 text-sm border-b border-gray-300 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
              >
                Read more →
              </Link>
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
