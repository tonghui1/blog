import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-light tracking-tight">About</h1>
              <p className="text-gray-600 mt-1 text-xs">Designer &amp; Developer</p>
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
        <div className="max-w-2xl">
          <p className="text-xl leading-relaxed mb-8 text-gray-900">
            Welcome to my space. I write about design, technology, and the spaces in between.
          </p>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              This blog is a collection of thoughts on building things that last. I believe in the power of simplicity,
              the importance of craft, and the idea that good design is invisible until it is missing.
            </p>
            <p>
              When I am not writing here, I am usually working on software, exploring new ideas, or trying to find
              the perfect cup of coffee.
            </p>
          </div>
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
