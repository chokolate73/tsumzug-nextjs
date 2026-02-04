'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface RedirectProps {
  to: string;
}

/**
 * Client-side redirect component.
 * Note: For true 301 redirects, server-side configuration is needed.
 * This provides a fallback for SPA routing.
 */
export default function Redirect({ to }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    // Replace current history entry (simulates redirect behavior)
    router.replace(to);
  }, [router, to]);

  return null;
}
