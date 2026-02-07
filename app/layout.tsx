import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import './globals.css';
import { getBaseUrl } from '@/lib/seo/helpers';

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Umzugsfirma Duisburg | TopSicher Umzüge – Ihr Umzugsunternehmen',
    template: '%s | TopSicher Umzüge',
  },
  description: 'TopSicher Umzüge – Ihre zuverlässige Umzugsfirma in Duisburg. Privatumzug, Firmenumzug, Full-Service Umzug zum Festpreis. Jetzt kostenloses Angebot anfordern!',
  keywords: 'Umzugsunternehmen Duisburg, Umzugsfirma Duisburg, Privatumzug Duisburg, Firmenumzug Duisburg, Büroumzug Duisburg, Umzugsservice Duisburg, Umzugskosten Duisburg, Umzug Festpreis Duisburg, Umzugshelfer Duisburg, Full-Service Umzug Duisburg, Möbelmontage Umzug, Packservice Umzug, Halteverbotszone Umzug Duisburg',
  authors: [{ name: 'TopSicher Umzüge' }],
  openGraph: {
    title: 'TopSicher Umzüge – Umzugsfirma Duisburg | Festpreis & Full-Service',
    description: 'Professionelles Umzugsunternehmen in Duisburg. Privatumzug, Büroumzug, Entrümpelung – alles aus einer Hand. Kostenlose Besichtigung & Festpreisgarantie.',
    url: BASE_URL,
    siteName: 'TopSicher Umzüge',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'TopSicher Umzüge – Umzugsfirma in Duisburg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  other: {
    'geo.region': 'DE-NW',
    'geo.placename': 'Duisburg',
    'geo.position': '51.47270;6.78282',
    'ICBM': '51.47270, 6.78282',
    'llms-txt': `${BASE_URL}/llms.txt`,
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
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: '[style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }' }} />
        </noscript>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
