import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: true,
  images: {
    domains: [
      'i.imgur.com', // Allow images from Imgur
      'firebasestorage.googleapis.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
