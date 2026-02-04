import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import './globals.css';
import Script from 'next/script';
import { getBaseUrl } from '@/lib/seo/helpers';

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'TopSicher Umzüge - Professionelle Umzüge in NRW',
    template: '%s | TopSicher Umzüge',
  },
  description: 'Professionelle Umzugs- und Transportdienstleistungen in Duisburg und ganz Nordrhein-Westfalen.',
  authors: [{ name: 'TopSicher Umzüge' }],
  openGraph: {
    title: 'TopSicher Umzüge - Professionelle Umzüge in NRW',
    description: 'Professionelle Umzugs- und Transportdienstleistungen in Duisburg und ganz Nordrhein-Westfalen.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        {/* TODO: Replace GA_MEASUREMENT_ID with your actual GA4 ID (format: G-XXXXXXXXXX) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
