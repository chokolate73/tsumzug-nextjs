'use client';

/**
 * SEO Component - Legacy wrapper
 * In Next.js, metadata is handled via the metadata export in page.tsx files.
 * This component is kept as a no-op for backward compatibility during migration.
 */

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  lang?: string;
  canonicalPath?: string;
  type?: string;
  structuredData?: any;
  alternates?: any;
  [key: string]: any;
}

export default function SEO(_props: SEOProps) {
  return null;
}
