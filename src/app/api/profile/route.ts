import { NextResponse } from 'next/server';

// 本地开发时的 mock 数据
const mockProfile = {
  name: 'Alex Chen',
  bio: 'Full-stack developer passionate about building beautiful, functional, and accessible web applications. I love turning complex problems into simple, elegant solutions.',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  techStack: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker'],
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com'
};

export async function GET() {
  try {
    // 暂时都返回 mock 数据，等 Cloudflare Pages 环境配置好后再连接 D1
    return NextResponse.json(mockProfile);
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    return NextResponse.json(mockProfile);
  }
}
