/** @type {import('next').NextConfig} */
const nextConfig = {
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
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self' https://formspree.io",
              "object-src 'none'",
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
      // Old city-specific URLs → new clean URLs
      { source: '/privatumzug-duisburg', destination: '/privatumzuege', permanent: true },
      { source: '/firmenumzug-duisburg', destination: '/firmenumzuege', permanent: true },
      { source: '/entruempelung-duisburg', destination: '/entruempelung', permanent: true },
      { source: '/moebeltransport-duisburg', destination: '/moebeltransport', permanent: true },
      { source: '/hausmeisterservice-duisburg', destination: '/hausmeisterservice', permanent: true },
      { source: '/renovierung-duisburg', destination: '/renovierung', permanent: true },
      // Old /services/ prefix URLs → new clean URLs
      { source: '/services/privatumzuege', destination: '/privatumzuege', permanent: true },
      { source: '/services/firmenumzuege', destination: '/firmenumzuege', permanent: true },
      { source: '/services/entruempelung', destination: '/entruempelung', permanent: true },
      { source: '/services/moebeltransport', destination: '/moebeltransport', permanent: true },
      { source: '/services/hausmeisterservice', destination: '/hausmeisterservice', permanent: true },
      { source: '/services/renovierung', destination: '/renovierung', permanent: true },
      // Old extra pages → home or closest service
      { source: '/umzugsunternehmen-duisburg', destination: '/', permanent: true },
      { source: '/umzug-kosten-duisburg', destination: '/', permanent: true },
      { source: '/umzug-und-entruempelung-duisburg', destination: '/entruempelung', permanent: true },
      { source: '/haushaltsaufloesung-duisburg', destination: '/entruempelung', permanent: true },
      { source: '/angebot', destination: '/', permanent: true },
      { source: '/preise-duisburg', destination: '/', permanent: true },
      { source: '/en/prices', destination: '/en', permanent: true },
      { source: '/ru/prices', destination: '/ru', permanent: true },
    ];
  },
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
