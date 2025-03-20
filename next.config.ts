import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  removeConsole: process.env.NODE_ENV === 'production',
};

export default nextConfig;
