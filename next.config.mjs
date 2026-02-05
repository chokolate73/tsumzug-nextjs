/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Handle image imports as URL strings (matching Vite behavior)
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com",
              "font-src 'self'",
              "connect-src 'self' https://formspree.io",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' https://formspree.io",
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/services/privatumzuege', destination: '/privatumzug-duisburg', permanent: true },
      { source: '/services/privatumzuege/', destination: '/privatumzug-duisburg', permanent: true },
      { source: '/services/firmenumzuege', destination: '/firmenumzug-duisburg', permanent: true },
      { source: '/services/firmenumzuege/', destination: '/firmenumzug-duisburg', permanent: true },
      { source: '/services/entruempelung', destination: '/entruempelung-duisburg', permanent: true },
      { source: '/services/entruempelung/', destination: '/entruempelung-duisburg', permanent: true },
      { source: '/services/moebeltransport', destination: '/moebeltransport-duisburg', permanent: true },
      { source: '/services/moebeltransport/', destination: '/moebeltransport-duisburg', permanent: true },
      { source: '/services/hausmeisterservice', destination: '/umzugsunternehmen-duisburg', permanent: true },
      { source: '/services/hausmeisterservice/', destination: '/umzugsunternehmen-duisburg', permanent: true },
      { source: '/services/renovierung', destination: '/umzugsunternehmen-duisburg', permanent: true },
      { source: '/services/renovierung/', destination: '/umzugsunternehmen-duisburg', permanent: true },
    ];
  },
  trailingSlash: false,
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
