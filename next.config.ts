import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Server external packages (moved from experimental)
  serverExternalPackages: ['@supabase/supabase-js'],

  // Image optimization (updated to use remotePatterns)
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      // TODO: Add your Supabase storage domain
      // {
      //   protocol: 'https',
      //   hostname: 'your-project.supabase.co',
      //   pathname: '/storage/v1/object/public/**',
      // },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // TODO: Add redirects as needed
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },

  // Environment variables validation
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'OpenBio',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Build configuration
  output: 'standalone', // For Docker deployment
  
  // TODO: Add additional configuration
  // - PWA configuration
  // - Bundle analyzer
  // - Custom webpack config
  // - Performance optimizations
};

export default nextConfig;