import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Future enabled features
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
