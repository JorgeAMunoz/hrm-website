import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
       { // Allow loading the logo from the domain
        protocol: 'https',
        hostname: 'highrisemechanical.com', // Replace with your actual domain if different
        port: '',
        pathname: '/logo.png',
      },
       { // Allow loading the og image from the domain
        protocol: 'https://',
        hostname: 'highrisemechanical.com', // Replace with your actual domain if different
        port: '',
        pathname: '/og-image.png',
      },
    ],
    // Optimize image loading
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // formats: ['image/avif', 'image/webp'], // Use modern formats
  },
  // Experimental features for potential performance gains (use with caution)
   experimental: {
  //   // Enable granular chunking (might improve code splitting) - Removed as it's not recognized
  //   // granularChunks: true,
  //   // Server Actions Body Size Limit (if using large forms/uploads)
  //   // serverActions: {
  //   //   bodySizeLimit: '2mb',
  //   // },
   },
};

export default nextConfig;
