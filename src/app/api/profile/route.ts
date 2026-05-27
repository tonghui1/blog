import { NextResponse } from 'next/server';

// Cloudflare D1 类型定义
interface Env {
  DB: D1Database;
}

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
    // 检查是否在 Cloudflare Pages 环境中
    if (typeof process !== 'undefined' && process.env.CF_PAGES) {
      // Cloudflare Pages 环境 - 使用 D1
      // Note: 在 Pages Functions 中我们通过 context 访问 env
      // 这里先返回 mock 数据，完整实现需要 Pages Functions
      return NextResponse.json(mockProfile);
    }
    
    // 本地开发环境
    return NextResponse.json(mockProfile);
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    return NextResponse.json(mockProfile);
  }
}
