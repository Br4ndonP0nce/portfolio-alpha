import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: true,
  images: {
    domains: [
      'i.imgur.com', // Allow images from Imgur
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
