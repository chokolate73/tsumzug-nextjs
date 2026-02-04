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
