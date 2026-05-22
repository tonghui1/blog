import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = {
  '1': {
    title: 'The Art of Simplicity',
    date: 'May 20, 2026',
    content: `
      <p>Simplicity is not the absence of something. It's the presence of exactly the right things—nothing more, nothing less.</p>
      
      <h2 class="mt-12 mb-6 text-2xl font-normal">Finding Clarity</h2>
      
      <p>In a world that constantly pushes for more—more features, more content, more noise—choosing to do less is an act of courage. It requires discipline to say no, to focus, to refine.</p>
      
      <p class="mb-6">The best designs aren't the ones that have nothing left to add. They're the ones that have nothing left to take away.</p>
      
      <h2 class="mt-12 mb-6 text-2xl font-normal">Practice Makes Permanent</h2>
      
      <p>This isn't something that happens overnight. It's a practice. A way of seeing. Every day, we get a little better at identifying what matters and what doesn't.</p>
      
      <p>The reward? Space to breathe. Room to think. Time for what truly counts.</p>
    `,
  },
  '2': {
    title: 'Typography Matters',
    date: 'May 15, 2026',
    content: `
      <p>Typography is the craft of arranging type in a way that makes language visible. It's not just about making things look good—it's about making them readable, understandable, and meaningful.</p>
      
      <h2 class="mt-12 mb-6 text-2xl font-normal">The Invisible Art</h2>
      
      <p>Good typography goes unnoticed. It doesn't shout. It doesn't demand attention. It quietly does its job, letting the content shine through.</p>
      
      <p class="mb-6">But when it's bad? You notice immediately. The reader stumbles. The message gets lost. The experience suffers.</p>
      
      <h2 class="mt-12 mb-6 text-2xl font-normal">Details, Details</h2>
      
      <p>Line length, leading, tracking, hierarchy—these aren't just terms. They're the tools we use to create rhythm, flow, and emphasis. Every choice matters.</p>
    `,
  },
  '3': {
    title: 'Building for the Future',
    date: 'May 10, 2026',
    content: `
      <p>Software is never done. It evolves. It grows. It changes with the people who use it and the world around it.</p>
      
      <h2 class="mt-12 mb-6 text-2xl font-normal">Durability Over Speed</h2>
      
      <p>It's tempting to move fast and break things. But there's something to be said for building things that last—for making choices that will still make sense years from now.</p>
      
      <p class="mb-6">This doesn't mean being afraid of change. It means being intentional about it.</p>
      
      <h2 class="mt-12 mb-6 text-2xl font-normal">Timeless Choices</h2>
      
      <p>Some technologies come and go. Others stick around. The trick is learning to tell the difference—and investing accordingly.</p>
      
      <p>The best code is the code you don't have to rewrite next year.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({
    id,
  }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts[id as keyof typeof posts];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" className="text-2xl font-light tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
                Portfolio
              </Link>
            </div>
            <nav className="space-x-6 text-sm">
              <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">Home</Link>
              <Link href="/posts" className="text-gray-900 hover:text-gray-600 transition-colors">Posts</Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600 transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-6xl mx-auto px-8 py-16">
        <header className="mb-16">
          <time className="text-xs text-gray-600 uppercase tracking-widest">{post.date}</time>
          <h1 className="text-4xl mt-3 leading-tight text-gray-900">{post.title}</h1>
        </header>
        
        <div 
          className="max-w-2xl text-gray-900 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <footer className="border-t border-gray-200 mt-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <Link 
            href="/posts" 
            className="text-sm text-gray-600 border-b border-gray-300 pb-0.5 hover:text-gray-900 transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </footer>
    </div>
  );
}
