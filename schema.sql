-- Profile table
CREATE TABLE IF NOT EXISTS profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  bio TEXT NOT NULL,
  avatar_url TEXT NOT NULL,
  tech_stack TEXT NOT NULL, -- JSON array stored as text
  github_url TEXT NOT NULL,
  linkedin_url TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT OR IGNORE INTO profile (name, bio, avatar_url, tech_stack, github_url, linkedin_url)
VALUES (
  'Alex Chen',
  'Full-stack developer passionate about building beautiful, functional, and accessible web applications. I love turning complex problems into simple, elegant solutions.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  '["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Git", "Docker"]',
  'https://github.com',
  'https://linkedin.com'
);
