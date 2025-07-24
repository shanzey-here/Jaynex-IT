import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'self' blob: data:;
  connect-src *;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp",
  },
  {
    key: "Cross-Origin-Opener-Policy", 
    value: "same-origin",
  },
];

const nextConfig: NextConfig = {
  // Core settings
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Performance optimizations
  compress: true,
  generateEtags: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jaynexit.com',
        port: '',
        pathname: '/**',
      },
      // Add more domains as needed
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Static assets caching
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // API routes caching
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
      // Images and media
      {
        source: '/:path*\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=60',
          },
        ],
      },
      // SEO-friendly headers for robots.txt and sitemap.xml
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      // Add trailing slash redirect if needed
      {
        source: '/((?!api/).*)',
        destination: '/404',
        permanent: false,
        has: [
          {
            type: 'header',
            key: 'x-invoke-status',
            value: '404',
          },
        ],
      },
    ];
  },

  // Rewrites for SEO-friendly URLs
  async rewrites() {
    return [
      // Serve robots.txt from public folder
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      // Serve sitemap.xml from public folder
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },

  // Modern experimental features
  turbopack: {
    // Turbopack configuration
  },

  experimental: {
    // Performance optimizations
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      '@headlessui/react',
      'framer-motion',
      // Add other large packages you use
    ],
    
    // Server actions and other features
    serverActions: {},
    
    // PPR (Partial Prerendering) - if using App Router
    ppr: false, // Enable when stable and needed
    
    // Scroll restoration
    scrollRestoration: true,
  },

  // Webpack customization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Bundle splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    // Handle specific modules
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // TypeScript configuration
  typescript: {
    // Don't type-check during build (do it in CI/CD instead)
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },

  // ESLint configuration
  eslint: {
    // Don't run ESLint during build (do it in CI/CD instead)
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },

  // Output configuration
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version || '1.0.0',
    NEXT_PUBLIC_SITE_URL: 'https://jaynexit.com',
  },

  // Trailing slash configuration for consistent URLs
  trailingSlash: false,
};

export default nextConfig;