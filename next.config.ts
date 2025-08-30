import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // 👈 required for static hosting
  },
};

export default nextConfig;
