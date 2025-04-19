import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  images: {
      unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/booking',
        destination: '/',
        permanent: true, // use `true` for 308 redirect (SEO-friendly)
      },
    ];
  },
};

export default nextConfig;
