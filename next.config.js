/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // 保持静态导出
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
