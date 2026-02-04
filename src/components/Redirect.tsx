import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RedirectProps {
  to: string;
}

/**
 * Client-side redirect component.
 * Note: For true 301 redirects, server-side configuration is needed.
 * This provides a fallback for SPA routing.
 */
export default function Redirect({ to }: RedirectProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // Replace current history entry (simulates redirect behavior)
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
}
